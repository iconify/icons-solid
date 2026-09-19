import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtfdr7bxo.css';
import '../../css/b/b19dnacrf.css';
import '../../css/n/nef4w_xbd.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gtfdr7bxo"/><path class="b19dnacrf"/><path class="nef4w_xbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:times-print"} {...others} />);
}

export default Component;
