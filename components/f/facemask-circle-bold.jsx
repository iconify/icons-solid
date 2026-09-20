import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y7gflrujy.css';
import '../../css/w/wc6pz9b2n.css';
import '../../css/w/w-ie4ibys.css';
import '../../css/k/kznzuji5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y7gflrujy"/><path class="wc6pz9b2n"/><path class="w-ie4ibys"/><path clip-rule="evenodd" class="kznzuji5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:facemask-circle-bold"} {...others} />);
}

export default Component;
