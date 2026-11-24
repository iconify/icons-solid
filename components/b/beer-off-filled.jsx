import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwieclb2b.css';
import '../../css/i/i26zuu1we.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rwieclb2b"/><path class="i26zuu1we"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:beer-off-filled"} {...others} />);
}

export default Component;
