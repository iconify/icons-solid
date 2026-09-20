import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m7r8ebbdl.css';
import '../../css/c/cur27zb3c.css';
import '../../css/c/cts3slb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m7r8ebbdl"/><path class="cur27zb3c"/><path class="cts3slb-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-top-linear"} {...others} />);
}

export default Component;
