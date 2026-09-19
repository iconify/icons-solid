import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqjs2qjlu.css';
import '../../css/b/bpy_-ibdf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aqjs2qjlu"/><path class="bpy_-ibdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:window-arrow-out-filled"} {...others} />);
}

export default Component;
