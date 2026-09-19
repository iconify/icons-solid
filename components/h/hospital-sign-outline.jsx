import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gujmhe0yt.css';
import '../../css/w/whtc4r5ex.css';
import '../../css/g/gvzi7_7ij.css';
import '../../css/s/suljz2g3l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="gujmhe0yt"/><path clip-rule="evenodd" class="whtc4r5ex"/><path class="gvzi7_7ij"/><path clip-rule="evenodd" class="suljz2g3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hospital-sign-outline"} {...others} />);
}

export default Component;
