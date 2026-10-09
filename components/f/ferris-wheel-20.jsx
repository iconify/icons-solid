import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzdy5vbln.css';
import '../../css/g/g483dpl3h.css';
import '../../css/f/fzumlcbut.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lzdy5vbln"/><path class="g483dpl3h"/><path class="fzumlcbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ferris-wheel-20"} {...others} />);
}

export default Component;
