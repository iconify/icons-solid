import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t3egng3nj.css';
import '../../css/f/fvjkl3bdy.css';
import '../../css/x/xu433-xqn.css';
import '../../css/q/qlupu-beq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t3egng3nj"/><path class="fvjkl3bdy"/><path class="xu433-xqn"/><path class="qlupu-beq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-face-mask-2"} {...others} />);
}

export default Component;
