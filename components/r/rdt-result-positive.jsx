import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6b-hwq9k.css';
import '../../css/d/d0yx4gbtw.css';
import '../../css/v/vl_70lije.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="z6b-hwq9k"/><path clip-rule="evenodd" class="d0yx4gbtw"/><path class="vl_70lije"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-positive"} {...others} />);
}

export default Component;
