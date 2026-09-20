import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/i/ivf-juwaw.css';
import '../../css/h/hy95nbtll.css';
import '../../css/y/yt8b-llwv.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/t_b_gd5dv.css';
import '../../css/f/fro--ibyq.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="ivf-juwaw"/><path class="hy95nbtll"/><path class="yt8b-llwv"/></g><g class="ij2x_72vy"><path class="t_b_gd5dv"/><path class="fro--ibyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:office-building"} {...others} />);
}

export default Component;
