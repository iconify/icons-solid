import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bu6ztne7y.css';
import '../../css/u/uy9n4bczz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="bu6ztne7y"/><path clip-rule="evenodd" class="uy9n4bczz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-out-stock2x-outline"} {...others} />);
}

export default Component;
