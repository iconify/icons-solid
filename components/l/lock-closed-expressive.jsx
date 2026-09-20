import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mb9wpjz4j.css';
import '../../css/x/xuphuebic.css';
import '../../css/f/fxibuwb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mb9wpjz4j"/><path clip-rule="evenodd" class="xuphuebic"/><path class="fxibuwb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:lock-closed-expressive"} {...others} />);
}

export default Component;
