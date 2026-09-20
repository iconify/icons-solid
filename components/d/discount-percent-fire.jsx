import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pat7lvhmi.css';
import '../../css/u/ubhvc2qvk.css';
import '../../css/c/cgfa64b1w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="pat7lvhmi"/><path class="ubhvc2qvk"/><path class="cgfa64b1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:discount-percent-fire"} {...others} />);
}

export default Component;
