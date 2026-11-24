import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdi-jobxg.css';
import '../../css/t/twobuiaoq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG7roxmb6D)" class="cuyn6tgcc"><path class="hdi-jobxg"/></g><defs><clipPath id="SVG7roxmb6D"><path class="twobuiaoq"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:chevrons-collapse-vertical-from-lines"} {...others} />);
}

export default Component;
