import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7hstbmu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/e/ecrffp_lt.css';
import '../../css/q/qmnpc1bre.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="az7hstbmu"/><g class="ij2x_72vy"><path class="ecrffp_lt"/><circle class="qmnpc1bre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:smiling-face"} {...others} />);
}

export default Component;
