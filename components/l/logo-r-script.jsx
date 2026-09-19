import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjw-j4bpy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gjw-j4bpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-r-script"} {...others} />);
}

export default Component;
