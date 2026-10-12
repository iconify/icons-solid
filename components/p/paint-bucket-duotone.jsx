import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uck5zprwe.css';
import '../../css/q/qq2-w3byw.css';
import '../../css/y/y3-c7gkqd.css';
import '../../css/b/b7l8s_brg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uck5zprwe"/><path class="qq2-w3byw"/><path class="y3-c7gkqd"/><path class="b7l8s_brg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:paint-bucket-duotone"} {...others} />);
}

export default Component;
