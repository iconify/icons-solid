import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xwhj4xbwf.css';
import '../../css/p/pbc518b4s.css';
import '../../css/a/a72a8abyl.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><rect class="xwhj4xbwf"/><path class="pbc518b4s"/><path clip-rule="evenodd" class="a72a8abyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:battery"} {...others} />);
}

export default Component;
