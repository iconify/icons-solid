import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uxetctbkk.css';
import '../../css/h/hu81nxnew.css';
import '../../css/l/lifqzczhe.css';
import '../../css/s/s_k11pbna.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="uxetctbkk"/><path class="hu81nxnew"/><path class="lifqzczhe"/><path class="s_k11pbna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:battery-charging"} {...others} />);
}

export default Component;
