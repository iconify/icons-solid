import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhjyh2bpy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mhjyh2bpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:folder-upload"} {...others} />);
}

export default Component;
