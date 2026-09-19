import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1x_shbfr.css';
import '../../css/h/hrclzsfpv.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="x1x_shbfr"/><path clip-rule="evenodd" class="hrclzsfpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:document-magnifying-glass-20-solid"} {...others} />);
}

export default Component;
