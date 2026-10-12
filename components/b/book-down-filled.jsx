import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax_u4j-wl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ax_u4j-wl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-down-filled"} {...others} />);
}

export default Component;
