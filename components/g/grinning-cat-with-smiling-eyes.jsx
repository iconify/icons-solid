import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyqummz7x.css';
import '../../css/v/vrdu_bw7d.css';
import '../../css/s/sv8ob1bnt.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/j/jxe41vbon.css';
import '../../css/o/o2f_lwx0d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tyqummz7x"/><path class="vrdu_bw7d"/><path class="sv8ob1bnt"/><g class="ij2x_72vy"><path class="jxe41vbon"/><path class="o2f_lwx0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:grinning-cat-with-smiling-eyes"} {...others} />);
}

export default Component;
