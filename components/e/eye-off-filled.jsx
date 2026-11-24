import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxg95ybdy.css';
import '../../css/k/kr-f3xbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mxg95ybdy"/><path class="kr-f3xbhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:eye-off-filled"} {...others} />);
}

export default Component;
