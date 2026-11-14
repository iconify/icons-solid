import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ux_jcbb_g.css';
import '../../css/h/h7ix5eoar.css';
import '../../css/h/hnr4r-ben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="ux_jcbb_g"/><path class="h7ix5eoar"/><path class="hnr4r-ben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:battery-charging"} {...others} />);
}

export default Component;
