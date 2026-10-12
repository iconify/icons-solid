import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df_472xle.css';
import '../../css/l/l3uet_-9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="df_472xle"/><path class="l3uet_-9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:image-upscale-filled"} {...others} />);
}

export default Component;
