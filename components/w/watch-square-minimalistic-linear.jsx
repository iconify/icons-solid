import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d-_0bsbbx.css';
import '../../css/l/l3yrwhb1k.css';
import '../../css/v/vs49djbdr.css';
import '../../css/k/k8gt8ib7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d-_0bsbbx"/><path class="l3yrwhb1k"/><path class="vs49djbdr"/><path class="k8gt8ib7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-square-minimalistic-linear"} {...others} />);
}

export default Component;
