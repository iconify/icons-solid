import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl-oqybpa.css';
import '../../css/m/mjf7cybbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cl-oqybpa"/><path class="mjf7cybbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-end-point-square"} {...others} />);
}

export default Component;
