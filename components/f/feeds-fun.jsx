import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmmy86dde.css';
import '../../css/s/sva9mubnr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kmmy86dde"/><path class="sva9mubnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:feeds-fun"} {...others} />);
}

export default Component;
