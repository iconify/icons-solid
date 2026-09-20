import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0dp5vk3o.css';
import '../../css/z/z_z9eib_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w0dp5vk3o"/><path class="z_z9eib_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:camera-stabilizer"} {...others} />);
}

export default Component;
