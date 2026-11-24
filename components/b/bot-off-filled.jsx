import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3xx_lb7w.css';
import '../../css/r/rosvxu7bf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m3xx_lb7w"/><path class="rosvxu7bf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bot-off-filled"} {...others} />);
}

export default Component;
