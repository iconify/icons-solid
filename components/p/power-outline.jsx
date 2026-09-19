import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yedc29b5u.css';
import '../../css/x/xdemm2bpy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yedc29b5u"/><path class="xdemm2bpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:power-outline"} {...others} />);
}

export default Component;
