import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ickn83b4x.css';
import '../../css/j/jpp-j2s8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ickn83b4x"/><path clip-rule="evenodd" class="jpp-j2s8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-letter-a-filled"} {...others} />);
}

export default Component;
