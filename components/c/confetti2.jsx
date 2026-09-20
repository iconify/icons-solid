import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e75gkwkok.css';
import '../../css/z/z-uv8i-bl.css';
import '../../css/y/y23yr8bll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e75gkwkok"/><path clip-rule="evenodd" class="z-uv8i-bl"/><path class="y23yr8bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:confetti2"} {...others} />);
}

export default Component;
