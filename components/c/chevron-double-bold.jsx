import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/x/xo73r-1bv.css';
import '../../css/i/isuy6sbwk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="xo73r-1bv"/><path class="isuy6sbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chevron-double-bold"} {...others} />);
}

export default Component;
