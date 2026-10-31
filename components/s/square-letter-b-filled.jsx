import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zotrfkt_o.css';
import '../../css/f/fp8qfjbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zotrfkt_o"/><path clip-rule="evenodd" class="fp8qfjbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-letter-b-filled"} {...others} />);
}

export default Component;
