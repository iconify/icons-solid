import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lk0f4vb0h.css';
import '../../css/j/jbgc_pbkv.css';
import '../../css/z/zy2inmb_d.css';
import '../../css/i/ivbd4mb_n.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lk0f4vb0h"/><path class="jbgc_pbkv"/><path class="zy2inmb_d"/><path class="ivbd4mb_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:microphone"} {...others} />);
}

export default Component;
