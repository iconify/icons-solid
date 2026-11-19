import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5ppiqb-b.css';
import '../../css/z/zpy-i0syo.css';
import '../../css/i/im3r36nom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f5ppiqb-b"/><path clip-rule="evenodd" class="zpy-i0syo"/><path class="im3r36nom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:signal-status-medium-filled"} {...others} />);
}

export default Component;
