import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s68tuuboa.css';
import '../../css/o/ou52yzkxl.css';
import '../../css/f/f5p5g2ben.css';
import '../../css/i/i2qc891_s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s68tuuboa"/><path class="ou52yzkxl"/><path class="f5p5g2ben"/><path class="i2qc891_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pathfinder-intersect"} {...others} />);
}

export default Component;
