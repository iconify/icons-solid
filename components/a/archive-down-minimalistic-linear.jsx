import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r69d2ebvv.css';
import '../../css/b/bq64z4bfb.css';
import '../../css/d/ddynxdwtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r69d2ebvv"/><path class="bq64z4bfb"/><path class="ddynxdwtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-down-minimalistic-linear"} {...others} />);
}

export default Component;
