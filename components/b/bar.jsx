import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9zf29bpy.css';
import '../../css/t/tcyc0_hyz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a9zf29bpy"/><path class="tcyc0_hyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bar"} {...others} />);
}

export default Component;
