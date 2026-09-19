import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_-r3se3i.css';
import '../../css/j/juudgbbnj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w_-r3se3i"/><path class="juudgbbnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:monitor"} {...others} />);
}

export default Component;
