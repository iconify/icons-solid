import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwdhtnb1e.css';
import '../../css/i/ibo2hx6gt.css';
import '../../css/k/ko5sjbb8w.css';
import '../../css/l/l4llv2krk.css';
import '../../css/g/g8sxg6b_l.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><rect class="gwdhtnb1e"/><path class="ibo2hx6gt"/><path class="ko5sjbb8w"/><path class="l4llv2krk"/><path class="g8sxg6b_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:open-off"} {...others} />);
}

export default Component;
