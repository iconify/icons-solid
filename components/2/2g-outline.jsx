import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fme87mb9p.css';
import '../../css/t/tjj8vhbjm.css';
import '../../css/v/vli0febuy.css';
import '../../css/x/xkx9-_bcv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="fme87mb9p"/><path clip-rule="evenodd" class="tjj8vhbjm"/><path class="vli0febuy"/><path class="xkx9-_bcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:2g-outline"} {...others} />);
}

export default Component;
