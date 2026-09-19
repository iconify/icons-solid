import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywausru8y.css';
import '../../css/q/q98q10buj.css';
import '../../css/j/jg4tp2bku.css';
import '../../css/e/e_0kae4yt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ywausru8y"/><path class="q98q10buj"/><path class="jg4tp2bku"/><path class="e_0kae4yt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:angle-double-outline"} {...others} />);
}

export default Component;
