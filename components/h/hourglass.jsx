import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kesxv2ddf.css';
import '../../css/c/c5tjsfbln.css';
import '../../css/s/s2vaych-g.css';
import '../../css/q/qlg8_6z_g.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kesxv2ddf"/><path clip-rule="evenodd" class="c5tjsfbln"/><path class="s2vaych-g"/><path clip-rule="evenodd" class="qlg8_6z_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:hourglass"} {...others} />);
}

export default Component;
