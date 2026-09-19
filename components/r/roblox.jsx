import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tfcg2mm7x.css';
import '../../css/m/mpq3hhbfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tfcg2mm7x"/><path class="mpq3hhbfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:roblox"} {...others} />);
}

export default Component;
