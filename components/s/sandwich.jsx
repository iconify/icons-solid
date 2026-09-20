import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eccxkzksd.css';
import '../../css/b/bi4f5zq2g.css';
import '../../css/q/qepwlccda.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/tt9zo6bmf.css';
import '../../css/h/h-0rs9omy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="eccxkzksd"/><path class="bi4f5zq2g"/><path class="qepwlccda"/><g class="ij2x_72vy"><path class="tt9zo6bmf"/><path class="h-0rs9omy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sandwich"} {...others} />);
}

export default Component;
