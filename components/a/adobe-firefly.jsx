import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgdhurbaf.css';
import '../../css/n/nj8wk4a5o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wgdhurbaf"/><path class="nj8wk4a5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-firefly"} {...others} />);
}

export default Component;
