import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fuy0zyboz.css';
import '../../css/d/dyzl-zbur.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthicons4x4Negative0)" class="cuyn6tgcc"><path class="fuy0zyboz"/><path clip-rule="evenodd" class="dyzl-zbur"/></g><defs><clipPath id="healthicons4x4Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:4x4-negative"} {...others} />);
}

export default Component;
