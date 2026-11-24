import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df_472xle.css';
import '../../css/j/j919tobxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="df_472xle"/><path class="j919tobxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:image-upscale-filled"} {...others} />);
}

export default Component;
