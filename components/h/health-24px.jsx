import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptbfn1blm.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vb3vy8bot.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGuhAOzcZm" class="ptbfn1blm"/></defs><mask id="SVGfAzgfd8L" class="ft5dv1b6b"><use href="#SVGuhAOzcZm" clip-rule="evenodd" class="d2kvgvbvc"/></mask><g class="cuyn6tgcc"><use href="#SVGuhAOzcZm" clip-rule="evenodd" class="d2kvgvbvc"/><path mask="url(#SVGfAzgfd8L)" class="vb3vy8bot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:health-24px"} {...others} />);
}

export default Component;
