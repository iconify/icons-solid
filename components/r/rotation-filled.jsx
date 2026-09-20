import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-c947zah.css';
import '../../css/k/k49q9mbht.css';
import '../../css/j/ju09as3xn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c-c947zah"/><path class="k49q9mbht"/><path class="ju09as3xn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:rotation-filled"} {...others} />);
}

export default Component;
