import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jk7rslbwk.css';
import '../../css/s/swdq09oqv.css';
import '../../css/j/jshl0cs6f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="jk7rslbwk"/><path class="swdq09oqv"/><path clip-rule="evenodd" class="jshl0cs6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:outpatient-department-outline"} {...others} />);
}

export default Component;
