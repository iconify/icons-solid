import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpyqy236k.css';
import '../../css/g/gcw1jebsm.css';
import '../../css/b/b7k4vkb4y.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/k/kki4zxl5e.css';
import '../../css/u/ujseujbsm.css';
import '../../css/a/a847upcpg.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wpyqy236k"><circle class="gcw1jebsm"/><path class="b7k4vkb4y"/></g><g class="x8poo_bjf"><ellipse class="kki4zxl5e"/><path class="ujseujbsm"/><path class="a847upcpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-walking-medium-light-skin-tone"} {...others} />);
}

export default Component;
