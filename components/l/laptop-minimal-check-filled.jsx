import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir-kh0dyx.css';
import '../../css/v/vo8y2ebke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ir-kh0dyx"/><path clip-rule="evenodd" class="vo8y2ebke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:laptop-minimal-check-filled"} {...others} />);
}

export default Component;
