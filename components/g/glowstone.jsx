import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl1-0k6eb.css';
import '../../css/j/jj9_iwbid.css';
import '../../css/s/s9gd7lbys.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wl1-0k6eb"/><path class="jj9_iwbid"/><path class="s9gd7lbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:glowstone"} {...others} />);
}

export default Component;
