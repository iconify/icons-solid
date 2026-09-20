import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzklix2ac.css';
import '../../css/e/ely8642xy.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/x38xcickk.css';
import '../../css/o/ob77ulb_f.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uzklix2ac"/><path class="ely8642xy"/><g class="ij2x_72vy"><path class="x38xcickk"/><path class="ob77ulb_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:musical-keyboard"} {...others} />);
}

export default Component;
