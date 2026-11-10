import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgdwhabwq.css';
import '../../css/w/wozco6-eg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgdwhabwq"/><path clip-rule="evenodd" class="wozco6-eg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:globe-ban-filled"} {...others} />);
}

export default Component;
