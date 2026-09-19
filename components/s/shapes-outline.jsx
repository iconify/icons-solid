import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jm9wa7blu.css';
import '../../css/w/wjj7p8alk.css';
import '../../css/z/z5wdhwbks.css';
import '../../css/x/xp86pvbjs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jm9wa7blu"/><path class="wjj7p8alk"/><path clip-rule="evenodd" class="z5wdhwbks"/><path class="xp86pvbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shapes-outline"} {...others} />);
}

export default Component;
