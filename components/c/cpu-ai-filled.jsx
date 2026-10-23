import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt1q0qbdx.css';
import '../../css/y/yq70e9tim.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zt1q0qbdx"/><path clip-rule="evenodd" class="yq70e9tim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cpu-ai-filled"} {...others} />);
}

export default Component;
