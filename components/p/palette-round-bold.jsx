import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t23fxacvf.css';
import '../../css/z/zegrxibpg.css';
import '../../css/f/f6ck3roek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t23fxacvf"/><path class="zegrxibpg"/><path clip-rule="evenodd" class="f6ck3roek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-round-bold"} {...others} />);
}

export default Component;
