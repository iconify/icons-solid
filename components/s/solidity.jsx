import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1hy48bet.css';
import '../../css/p/p2we-sb3f.css';
import '../../css/p/pbrkirbtm.css';
import '../../css/j/j2pgubono.css';
import '../../css/d/d7d3xlbqp.css';
import '../../css/u/u75vjgjaq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="y1hy48bet"/><path class="p2we-sb3f"/><path class="pbrkirbtm"/><path class="j2pgubono"/><path class="d7d3xlbqp"/><path class="u75vjgjaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:solidity"} {...others} />);
}

export default Component;
