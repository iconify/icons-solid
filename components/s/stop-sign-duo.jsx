import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9zzo3bwq.css';
import '../../css/q/qbvum3bcn.css';
import '../../css/e/e_fmn1lsi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j9zzo3bwq"/><path class="qbvum3bcn"/><path class="e_fmn1lsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stop-sign-duo"} {...others} />);
}

export default Component;
