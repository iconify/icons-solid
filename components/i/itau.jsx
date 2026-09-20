import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbdty6brt.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e_w_90iti.css';
import '../../css/c/c719mjbft.css';

const viewBox = {"width":300,"height":303.75};
const content = `<defs><clipPath id="SVGHnEUMdhj" clipPathUnits="userSpaceOnUse"><path class="vbdty6brt"/></clipPath></defs><g clip-path="url(#SVGHnEUMdhj)" transform="matrix(.8833 0 0 -.8935 -.3 303.79)" class="d2kvgvbvc"><path class="e_w_90iti"/><path class="c719mjbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:itau"} {...others} />);
}

export default Component;
