import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o9eziwahb.css';
import '../../css/u/uhyb91t7h.css';
import '../../css/w/wiqgcx4jl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o9eziwahb"/><path class="uhyb91t7h"/><path class="wiqgcx4jl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wind-linear"} {...others} />);
}

export default Component;
