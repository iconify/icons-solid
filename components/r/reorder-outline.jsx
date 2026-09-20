import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2r4blint.css';
import '../../css/g/g6gtmxbue.css';
import '../../css/p/pxc43wbmd.css';
import '../../css/n/nyhs13d2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l2r4blint"/><path class="g6gtmxbue"/><path class="pxc43wbmd"/><path class="nyhs13d2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-outline"} {...others} />);
}

export default Component;
