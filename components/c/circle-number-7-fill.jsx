import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muqh26bxs.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":16,"height":16};
const content = `<defs><path id="SVG70jmudZm" class="muqh26bxs"/></defs><g class="cuyn6tgcc"><use href="#SVG70jmudZm"/><use href="#SVG70jmudZm" clip-rule="evenodd" class="d2kvgvbvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circle-number-7-fill"} {...others} />);
}

export default Component;
