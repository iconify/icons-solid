import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/va3qq6b4s.css';
import '../../css/a/aed0glbja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="va3qq6b4s"/><path clip-rule="evenodd" class="aed0glbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:scroll-h"} {...others} />);
}

export default Component;
