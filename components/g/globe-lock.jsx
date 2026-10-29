import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cn2f9dbpj.css';
import '../../css/c/cgfl_2-qj.css';
import '../../css/u/umvgb2fhw.css';
import '../../css/x/xhowx-bcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cn2f9dbpj"/><path class="cgfl_2-qj wm-a"/><path class="umvgb2fhw wm-s"/><path class="wm-a xhowx-bcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:globe-lock"} {...others} />);
}

export default Component;
