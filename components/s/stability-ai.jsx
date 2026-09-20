import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzvfwk-bk.css';
import '../../css/h/h4ybj2byr.css';
import '../../css/g/g5oaydb1l.css';
import '../../css/l/l3hk83q2i.css';

const viewBox = {"width":256,"height":213};
const content = `<defs><linearGradient id="SVGe76EbcIH" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" class="gzvfwk-bk"/><stop offset="100%" class="h4ybj2byr"/></linearGradient></defs><path fill="url(#SVGe76EbcIH)" class="g5oaydb1l"/><path class="l3hk83q2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:stability-ai"} {...others} />);
}

export default Component;
