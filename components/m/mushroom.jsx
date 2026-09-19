import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-x8ftsqu.css';
import '../../css/q/qxwe76bwh.css';
import '../../css/k/kyfprmvqv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e-x8ftsqu"/><path class="qxwe76bwh"/><path clip-rule="evenodd" class="kyfprmvqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:mushroom"} {...others} />);
}

export default Component;
