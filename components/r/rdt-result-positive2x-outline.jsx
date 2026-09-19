import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8wxn8xap.css';
import '../../css/a/agwzg2atf.css';
import '../../css/x/x3_kr2bze.css';
import '../../css/v/vl_70lije.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="j8wxn8xap"/><path clip-rule="evenodd" class="agwzg2atf"/><path clip-rule="evenodd" class="x3_kr2bze"/><path class="vl_70lije"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-positive2x-outline"} {...others} />);
}

export default Component;
