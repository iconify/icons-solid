import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l52hl2bpy.css';
import '../../css/m/mya7lkbcq.css';
import '../../css/t/thsm46o_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l52hl2bpy"/><path class="mya7lkbcq"/><path class="thsm46o_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-pick-user"} {...others} />);
}

export default Component;
