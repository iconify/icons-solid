import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c3cw44yrk.css';
import '../../css/r/rpe_r-bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c3cw44yrk"/><path class="rpe_r-bbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:eye-off"} {...others} />);
}

export default Component;
