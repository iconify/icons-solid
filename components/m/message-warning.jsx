import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i00bmr7ot.css';
import '../../css/r/r_t6j5bpy.css';
import '../../css/t/ti_ojv3av.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i00bmr7ot"/><path class="r_t6j5bpy"/><path class="ti_ojv3av"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:message-warning"} {...others} />);
}

export default Component;
