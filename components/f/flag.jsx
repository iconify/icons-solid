import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvk71lb-z.css';
import '../../css/v/v4xpcu_js.css';
import '../../css/d/dt5g15b9b.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="vvk71lb-z"/><path clip-rule="evenodd" class="v4xpcu_js"/><path clip-rule="evenodd" class="dt5g15b9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:flag"} {...others} />);
}

export default Component;
