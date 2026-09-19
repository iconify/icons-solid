import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hij1pb51c.css';
import '../../css/b/b06lz2bfp.css';
import '../../css/t/tjj8vhbjm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="hij1pb51c"/><path class="b06lz2bfp"/><path clip-rule="evenodd" class="tjj8vhbjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:3g2x-outline"} {...others} />);
}

export default Component;
