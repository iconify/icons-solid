import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/epdwmcb6d.css';
import '../../css/o/oy18s4b0y.css';
import '../../css/c/cmxagetjr.css';
import '../../css/i/i7l94eb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="epdwmcb6d"/><path class="oy18s4b0y"/><path class="cmxagetjr"/><path class="i7l94eb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-filter"} {...others} />);
}

export default Component;
