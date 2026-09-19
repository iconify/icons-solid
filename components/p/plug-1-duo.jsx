import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j568bobeg.css';
import '../../css/t/tme_56i8r.css';
import '../../css/u/ugavslbec.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="j568bobeg"/><path class="tme_56i8r"/><path class="ugavslbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:plug-1-duo"} {...others} />);
}

export default Component;
