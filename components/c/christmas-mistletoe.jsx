import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wj4kpac6w.css';
import '../../css/w/w_nswibwm.css';
import '../../css/p/p7p95v0fb.css';
import '../../css/d/djam5bcdb.css';

const viewBox = {"width":16,"height":16};
const content = `<g transform="translate(0 3)" class="n1lsf0bnc"><circle class="wj4kpac6w"/><ellipse class="w_nswibwm"/><ellipse class="p7p95v0fb"/><path class="djam5bcdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:christmas-mistletoe"} {...others} />);
}

export default Component;
