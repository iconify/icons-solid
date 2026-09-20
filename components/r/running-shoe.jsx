import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pttts2brz.css';
import '../../css/i/iyptj4bkz.css';
import '../../css/e/erbopzbav.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/g/gwtzy197j.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGqFuOebbv" class="pttts2brz"/></defs><path class="iyptj4bkz"/><path class="erbopzbav"/><g class="ij2x_72vy"><use href="#SVGqFuOebbv"/><path class="gwtzy197j"/><use href="#SVGqFuOebbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:running-shoe"} {...others} />);
}

export default Component;
