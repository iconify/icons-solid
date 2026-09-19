import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r8f7u0bby.css';
import '../../css/t/t002y2qal.css';
import '../../css/s/sgaaagkzw.css';
import '../../css/v/vl_70lije.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="r8f7u0bby"/><path clip-rule="evenodd" class="t002y2qal"/><path clip-rule="evenodd" class="sgaaagkzw"/><path class="vl_70lije"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result2x-outline"} {...others} />);
}

export default Component;
