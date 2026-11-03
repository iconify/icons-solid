import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kemzep4yh.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/de0lnx-3x.css';
import '../../css/k/k5nfwvbrj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kemzep4yh"/><g class="ij2x_72vy"><path class="de0lnx-3x"/><path class="k5nfwvbrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:parking-garage"} {...others} />);
}

export default Component;
