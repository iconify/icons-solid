import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6p5u_znv.css';
import '../../css/j/j8d6owb_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f6p5u_znv"/><path class="j8d6owb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shield-tick"} {...others} />);
}

export default Component;
