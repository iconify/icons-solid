import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hc3kuirgw.css';
import '../../css/i/izi2e-p7w.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="hc3kuirgw"/><path clip-rule="evenodd" class="izi2e-p7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:phone"} {...others} />);
}

export default Component;
