import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9pq-abme.css';
import '../../css/g/gcw1jebsm.css';
import '../../css/b/b7k4vkb4y.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/k/kki4zxl5e.css';
import '../../css/u/ujseujbsm.css';
import '../../css/a/a847upcpg.css';

const viewBox = {"width":72,"height":72};
const content = `<g transform="matrix(-1 0 0 1 72 0)" class="k9pq-abme"><circle class="gcw1jebsm"/><path class="b7k4vkb4y"/></g><g transform="matrix(-1 0 0 1 72 0)" class="x8poo_bjf"><ellipse class="kki4zxl5e"/><path class="ujseujbsm"/><path class="a847upcpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-walking-medium-skin-tone-facing-right"} {...others} />);
}

export default Component;
