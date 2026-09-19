import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zyhjwmhpq.css';
import '../../css/i/i7c4h2zdq.css';
import '../../css/s/sqekfgb1j.css';
import '../../css/f/fxm5l37-i.css';

const viewBox = {"width":16,"height":16};
const content = `<g transform="translate(0 2)" class="n1lsf0bnc"><path class="zyhjwmhpq"/><path class="i7c4h2zdq"/><ellipse class="sqekfgb1j"/><circle class="fxm5l37-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:trolley-full"} {...others} />);
}

export default Component;
