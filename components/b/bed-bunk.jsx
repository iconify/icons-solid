import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uneu65bby.css';
import '../../css/i/iayp14b3h.css';
import '../../css/f/f3hcruhto.css';
import '../../css/z/z6ev6rbws.css';
import '../../css/k/klzaiwa8a.css';
import '../../css/d/d7n2m7bvj.css';
import '../../css/u/u4ofipz9p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="uneu65bby"/><path class="iayp14b3h"/><path class="f3hcruhto"/><path class="z6ev6rbws"/><path class="klzaiwa8a"/><path class="d7n2m7bvj"/><path class="u4ofipz9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bed-bunk"} {...others} />);
}

export default Component;
