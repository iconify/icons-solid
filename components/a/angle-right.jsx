import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kz4gazbfr.css';
import '../../css/y/ypxup6b3j.css';
import '../../css/o/ov7upw0qn.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="kz4gazbfr"/><path class="ypxup6b3j"/><path class="ov7upw0qn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:angle-right"} {...others} />);
}

export default Component;
