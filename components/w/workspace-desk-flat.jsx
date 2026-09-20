import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mchwn7vmg.css';
import '../../css/r/ryyk47brv.css';
import '../../css/t/t0cxf3ofc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="mchwn7vmg"/><path clip-rule="evenodd" class="ryyk47brv"/><path clip-rule="evenodd" class="t0cxf3ofc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:workspace-desk-flat"} {...others} />);
}

export default Component;
