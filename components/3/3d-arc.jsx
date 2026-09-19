import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kkycqccdw.css';
import '../../css/f/fp6c-v_2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kkycqccdw"/><path class="fp6c-v_2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:3d-arc"} {...others} />);
}

export default Component;
