import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sacdn40yp.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f96l9acmb.css';
import '../../css/c/c6auvpuvc.css';
import '../../css/e/edlkufbty.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="sacdn40yp"/><g class="cuyn6tgcc"><circle class="f96l9acmb"/><circle class="c6auvpuvc"/><circle class="edlkufbty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:list-bullet-stroke-12"} {...others} />);
}

export default Component;
