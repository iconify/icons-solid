import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yl7hf9jsi.css';
import '../../css/v/vpkefk-yx.css';
import '../../css/f/fpv1o-b1u.css';
import '../../css/y/yukbl1bis.css';
import '../../css/l/l8uocgvhn.css';
import '../../css/y/yfnz9_bzf.css';
import '../../css/b/bkshnbi7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k yl7hf9jsi"/><path class="vpkefk-yx wm-deco"/><path class="fpv1o-b1u wm-k"/><path class="wm-k yukbl1bis"/><path class="l8uocgvhn wm-shadow"/><path class="wm-shine yfnz9_bzf"/><path class="bkshnbi7w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:cpu"} {...others} />);
}

export default Component;
