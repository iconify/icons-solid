import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei8ati9hl.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/k/kt4x4b-7d.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGcz2Ucpba" class="ei8ati9hl"/></defs><g class="ft5dv1b6b"><use href="#SVGcz2Ucpba"/><use href="#SVGcz2Ucpba" class="p_3zmsvya"/><path class="kt4x4b-7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-column"} {...others} />);
}

export default Component;
