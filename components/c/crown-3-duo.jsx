import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d47doqb0c.css';
import '../../css/a/aylx3_bpp.css';
import '../../css/p/pu67nfbgn.css';
import '../../css/z/zjtk3jbat.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="d47doqb0c"/><path class="aylx3_bpp"/><path class="pu67nfbgn"/><path class="zjtk3jbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crown-3-duo"} {...others} />);
}

export default Component;
