import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qy80u1bjw.css';
import '../../css/f/fz451zb9n.css';
import '../../css/x/xcetmgeuw.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGfM2vdeLS)"><path class="qy80u1bjw"/><path class="fz451zb9n"/></g><defs><clipPath id="SVGfM2vdeLS"><path class="xcetmgeuw"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lodgify"} {...others} />);
}

export default Component;
