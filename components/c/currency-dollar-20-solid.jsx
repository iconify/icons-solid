import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b321e1bkb.css';
import '../../css/g/gkf8244vt.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="b321e1bkb"/><path clip-rule="evenodd" class="gkf8244vt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:currency-dollar-20-solid"} {...others} />);
}

export default Component;
