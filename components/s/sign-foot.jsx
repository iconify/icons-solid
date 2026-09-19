import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kxiao2i0k.css';
import '../../css/z/zaspabb0q.css';
import '../../css/b/bxb13fbzq.css';
import '../../css/s/s-sfg2b0d.css';
import '../../css/n/np6i7upya.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="kxiao2i0k"/><ellipse class="zaspabb0q"/><ellipse class="bxb13fbzq"/><ellipse transform="rotate(-10.51 1.986 7.435)" class="s-sfg2b0d"/><path class="np6i7upya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:sign-foot"} {...others} />);
}

export default Component;
