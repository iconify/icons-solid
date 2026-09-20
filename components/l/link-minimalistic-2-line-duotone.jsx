import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uxubsjbdj.css';
import '../../css/h/hsch2jdsj.css';
import '../../css/h/h5dly1lac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uxubsjbdj"/><path class="hsch2jdsj"/><path class="h5dly1lac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-minimalistic-2-line-duotone"} {...others} />);
}

export default Component;
