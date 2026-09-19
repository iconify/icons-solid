import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpw-8-bti.css';
import '../../css/y/ydri2mr6x.css';
import '../../css/r/rj1y-5bkj.css';
import '../../css/u/uu14cb_qr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="zpw-8-bti"><rect class="ydri2mr6x"/><rect class="rj1y-5bkj"/><rect class="uu14cb_qr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ellipsis-bold"} {...others} />);
}

export default Component;
