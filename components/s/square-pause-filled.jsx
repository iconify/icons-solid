import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twrw249du.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="twrw249du"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-pause-filled"} {...others} />);
}

export default Component;
