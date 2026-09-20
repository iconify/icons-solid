import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4aomtbmc.css';
import '../../css/c/ce_anjbnv.css';
import '../../css/q/qes10601v.css';
import '../../css/e/e0fss5f_y.css';
import '../../css/k/kk2zmxb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r4aomtbmc"/><path class="ce_anjbnv"/><path class="qes10601v"/><path class="e0fss5f_y"/><path class="kk2zmxb6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:touch-id"} {...others} />);
}

export default Component;
