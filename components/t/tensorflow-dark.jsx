import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i73ohhbwx.css';
import '../../css/f/f0w_mobag.css';
import '../../css/e/ehag2qf8m.css';
import '../../css/k/ktnfdbcmj.css';

const viewBox = {"width":266.79,"height":243.84};
const content = `<defs><clipPath id="SVG0cTCCeTO"><use href="#SVG97Pgtb1u"/></clipPath><clipPath id="SVGRl5x8dpu"><use href="#SVGF83r7bPW"/></clipPath><path id="SVG97Pgtb1u" class="i73ohhbwx"/><path id="SVGF83r7bPW" class="f0w_mobag"/></defs><use href="#SVG97Pgtb1u"/><g clip-path="url(#SVG0cTCCeTO)"><path class="ehag2qf8m"/></g><use href="#SVGF83r7bPW"/><g clip-path="url(#SVGRl5x8dpu)"><path class="ktnfdbcmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tensorflow-dark"} {...others} />);
}

export default Component;
