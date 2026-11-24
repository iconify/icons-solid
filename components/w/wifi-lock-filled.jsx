import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf-j6_d6b.css';
import '../../css/t/t45b4tbro.css';
import '../../css/f/f1ziukbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yf-j6_d6b"/><path class="t45b4tbro"/><path class="f1ziukbyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:wifi-lock-filled"} {...others} />);
}

export default Component;
