import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c510gibxl.css';
import '../../css/s/st1-3c4aa.css';
import '../../css/w/wm9jnnb5f.css';
import '../../css/y/yasfyvbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c510gibxl"/><path class="st1-3c4aa"/><path class="wm9jnnb5f"/><path class="yasfyvbyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:condicioner-2-linear"} {...others} />);
}

export default Component;
