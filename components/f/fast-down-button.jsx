import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/fcz2jhy5n.css';
import '../../css/u/uljyx7ljt.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ij2x_72vy"><path class="fcz2jhy5n"/><path class="uljyx7ljt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fast-down-button"} {...others} />);
}

export default Component;
