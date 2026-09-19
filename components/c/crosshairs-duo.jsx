import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1az-nbrd.css';
import '../../css/e/e5hgosb1a.css';
import '../../css/r/rsg6slfkl.css';
import '../../css/j/ja-v4qbal.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="a1az-nbrd"/><path class="e5hgosb1a"/><path class="rsg6slfkl"/><path class="ja-v4qbal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crosshairs-duo"} {...others} />);
}

export default Component;
