import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0lv2dbka.css';
import '../../css/d/dwhrthbwy.css';
import '../../css/j/jxgl27bqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="h0lv2dbka"/><path class="dwhrthbwy"/><path clip-rule="evenodd" class="jxgl27bqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-pen-bold"} {...others} />);
}

export default Component;
