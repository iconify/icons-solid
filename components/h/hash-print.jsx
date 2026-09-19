import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/e/ey92g6b7j.css';
import '../../css/k/k23tj10xr.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="pr52f_b5y"><path class="ey92g6b7j"/><path class="k23tj10xr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:hash-print"} {...others} />);
}

export default Component;
