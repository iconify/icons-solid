import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/akry8ac1d.css';
import '../../css/q/qmnpc1bre.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><g class="ij2x_72vy"><path class="akry8ac1d"/><circle class="qmnpc1bre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:kissing-face-with-closed-eyes"} {...others} />);
}

export default Component;
