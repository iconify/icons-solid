import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hgrm2rbfz.css';
import '../../css/t/tnnk9dqhq.css';
import '../../css/s/sjq--8btf.css';
import '../../css/h/h-mw_xb8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hgrm2rbfz"/><path class="tnnk9dqhq"/><path class="sjq--8btf"/><path class="h-mw_xb8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-pen-line-duotone"} {...others} />);
}

export default Component;
