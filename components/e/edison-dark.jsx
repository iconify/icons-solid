import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trpj3ccoh.css';
import '../../css/s/s0nmtwbnb.css';

const viewBox = {"width":1511,"height":1375};
const content = `<defs><clipPath id="SVGOmuFfroj" clipPathUnits="userSpaceOnUse"><path class="trpj3ccoh"/></clipPath></defs><g clip-path="url(#SVGOmuFfroj)"><path class="s0nmtwbnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:edison-dark"} {...others} />);
}

export default Component;
