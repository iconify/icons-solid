import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjp588bse.css';
import '../../css/y/yas-v_bpy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vjp588bse"/><path class="yas-v_bpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:tennis-ball-alt-filled"} {...others} />);
}

export default Component;
