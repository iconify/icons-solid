import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxw7g3bdf.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/j/jpuqunpzd.css';
import '../../css/x/xwhsq3b5z.css';
import '../../css/h/hwsqkibfd.css';
import '../../css/a/a99-j3b_l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kxw7g3bdf"/><g class="sxsjrzbyv"><path clip-rule="evenodd" class="jpuqunpzd"/><path clip-rule="evenodd" transform="matrix(.2737 0 0 .269 -374.937 -95.373)" class="xwhsq3b5z"/><path clip-rule="evenodd" class="hwsqkibfd"/><path class="a99-j3b_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:japanese-application-button"} {...others} />);
}

export default Component;
