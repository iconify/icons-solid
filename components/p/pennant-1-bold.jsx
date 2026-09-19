import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uceuolr2w.css';
import '../../css/r/rja0tvb5w.css';
import '../../css/b/b2diuqr2w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uceuolr2w"/><path class="rja0tvb5w"/><path class="b2diuqr2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pennant-1-bold"} {...others} />);
}

export default Component;
