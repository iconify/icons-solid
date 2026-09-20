import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aly3a1bmz.css';
import '../../css/k/k8x35gqat.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};
const content = `<g class="cuyn6tgcc"><path class="aly3a1bmz"/><path class="k8x35gqat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:viadeo"} {...others} />);
}

export default Component;
