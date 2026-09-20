import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2gfsh5ia.css';
import '../../css/d/d09_q1bya.css';
import '../../css/r/rci-steit.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="b2gfsh5ia"/><path clip-rule="evenodd" class="d09_q1bya"/><path class="rci-steit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:satellite-dish-flat"} {...others} />);
}

export default Component;
