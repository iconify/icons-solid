import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkb3d8iqr.css';
import '../../css/v/vxhny_5ct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vkb3d8iqr"/><path clip-rule="evenodd" class="vxhny_5ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:card-sim-filled"} {...others} />);
}

export default Component;
