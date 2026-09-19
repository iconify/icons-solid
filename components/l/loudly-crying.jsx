import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hwye38fmn.css';
import '../../css/e/eu6z8fdae.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="hwye38fmn"/><path clip-rule="evenodd" class="eu6z8fdae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:loudly-crying"} {...others} />);
}

export default Component;
