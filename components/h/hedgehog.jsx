import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj_j01b-n.css';
import '../../css/k/k99pi4o6z.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/khaum3bxk.css';
import '../../css/g/go94mvb9x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="oj_j01b-n"/><path class="k99pi4o6z"/><g class="ij2x_72vy"><path class="khaum3bxk"/><path class="go94mvb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hedgehog"} {...others} />);
}

export default Component;
