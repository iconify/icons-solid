import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdea7tbyg.css';
import '../../css/q/qhulccbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xdea7tbyg"/><path clip-rule="evenodd" class="qhulccbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:tv-dot-expressive"} {...others} />);
}

export default Component;
