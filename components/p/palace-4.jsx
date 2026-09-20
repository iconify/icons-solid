import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0kbyjblt.css';
import '../../css/p/pr8jk-b5j.css';
import '../../css/k/kh37d4bji.css';
import '../../css/k/kifsyrbmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d0kbyjblt"/><path class="pr8jk-b5j"/><path class="kh37d4bji"/><path class="kifsyrbmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:palace-4"} {...others} />);
}

export default Component;
