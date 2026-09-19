import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d__9kbylk.css';
import '../../css/u/uolzbmrxs.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kzsrsccfe.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGZg2WPbqn" class="d__9kbylk"/><path id="SVGFXsCmRkG" class="uolzbmrxs"/></defs><mask id="SVG2elAudDJ" class="ft5dv1b6b"><use href="#SVGZg2WPbqn"/><use href="#SVGFXsCmRkG" clip-rule="evenodd" class="d2kvgvbvc"/></mask><g class="cuyn6tgcc"><use href="#SVGZg2WPbqn"/><use href="#SVGFXsCmRkG" clip-rule="evenodd" class="d2kvgvbvc"/><path mask="url(#SVG2elAudDJ)" class="kzsrsccfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:medicines-24px"} {...others} />);
}

export default Component;
