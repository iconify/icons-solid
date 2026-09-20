import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b51p-rlri.css';
import '../../css/c/c0ccl_b1x.css';
import '../../css/o/ouw7_yhvl.css';
import '../../css/i/ikoy93fez.css';
import '../../css/r/r2a4u2bdo.css';
import '../../css/i/i3-4m9fxk.css';
import '../../css/b/bo4hqlbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b51p-rlri"/><path class="c0ccl_b1x"/><path class="ouw7_yhvl"/><path class="ikoy93fez"/><path class="r2a4u2bdo"/><path class="i3-4m9fxk"/><path class="bo4hqlbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:tags-remove"} {...others} />);
}

export default Component;
