import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1-ktetnq.css';
import '../../css/j/j4av9gb_e.css';
import '../../css/d/dn453zvfx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a1-ktetnq"/><path clip-rule="evenodd" class="j4av9gb_e"/><path class="dn453zvfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:agriculture2x-outline"} {...others} />);
}

export default Component;
