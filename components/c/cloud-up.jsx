import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p2vd3xbgk.css';
import '../../css/t/tiqb603qs.css';
import '../../css/w/wrgkn9b6i.css';
import '../../css/l/l2tlt6_ly.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p2vd3xbgk"/><path class="tiqb603qs"/><path class="wrgkn9b6i"/><path class="l2tlt6_ly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:cloud-up"} {...others} />);
}

export default Component;
