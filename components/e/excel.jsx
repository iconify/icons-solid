import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/o/o9u0n_bpm.css';
import '../../css/u/u1drtbcci.css';
import '../../css/h/h7b4_kivr.css';
import '../../css/v/vk1iioblf.css';
import '../../css/n/njuqbhbch.css';
import '../../css/f/fwi9vnbxl.css';
import '../../css/y/ycr6h7b8v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="o9u0n_bpm"/><path class="u1drtbcci"/><path class="h7b4_kivr"/><path class="vk1iioblf"/><rect class="njuqbhbch"/><path class="fwi9vnbxl"/><path class="ycr6h7b8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:excel"} {...others} />);
}

export default Component;
