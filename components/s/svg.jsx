import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbren1b0h.css';
import '../../css/n/n2xns2dzg.css';

const viewBox = {"width":300,"height":300};
const content = `<g class="sbren1b0h"><g id="SVGC8RjHw2T" transform="translate(150 150)"><path id="SVGCQNsheVl" class="n2xns2dzg"/><use href="#SVGCQNsheVl" transform="rotate(45)"/><use href="#SVGCQNsheVl" transform="rotate(90)"/><use href="#SVGCQNsheVl" transform="rotate(135)"/></g></g><use href="#SVGC8RjHw2T"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:svg"} {...others} />);
}

export default Component;
