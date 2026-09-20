import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vbm1anbvy.css';
import '../../css/c/ci-zjjboq.css';
import '../../css/u/u54p-ys_e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="vbm1anbvy"/><path class="ci-zjjboq"/><path class="u54p-ys_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pork-meat"} {...others} />);
}

export default Component;
