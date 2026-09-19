import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsg5j7ibl.css';
import '../../css/r/rrk44q_vt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lsg5j7ibl"/><path class="rrk44q_vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:close-circle-outline"} {...others} />);
}

export default Component;
