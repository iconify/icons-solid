import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmv0rgb2k.css';
import '../../css/f/fce7at5ak.css';
import '../../css/d/db95n0b-d.css';
import '../../css/o/ohiubkjmj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kmv0rgb2k"/><path class="fce7at5ak"/><path class="db95n0b-d"/><path class="ohiubkjmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:highlighter"} {...others} />);
}

export default Component;
