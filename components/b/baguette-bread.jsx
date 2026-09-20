import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyf3f-bfc.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/lc32bsb7m.css';
import '../../css/g/gpkkzdb8h.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="eyf3f-bfc"/><g class="ij2x_72vy"><path class="lc32bsb7m"/><path class="gpkkzdb8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:baguette-bread"} {...others} />);
}

export default Component;
