import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pe9qg0rhv.css';
import '../../css/v/v4282eljr.css';

const viewBox = {"width":301,"height":159};
const content = `<g class="ft5dv1b6b"><path class="pe9qg0rhv"/><path class="v4282eljr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:fm"} {...others} />);
}

export default Component;
