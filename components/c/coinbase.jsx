import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/me0vubcni.css';
import '../../css/c/c5gjrp_1m.css';
import '../../css/a/a0a8b2bmr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG35eD2idq)"><path class="me0vubcni"/><path class="c5gjrp_1m"/></g><defs><clipPath id="SVG35eD2idq"><rect class="a0a8b2bmr"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:coinbase"} {...others} />);
}

export default Component;
