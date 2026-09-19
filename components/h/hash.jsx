import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/c/cpccgt37i.css';
import '../../css/f/fl_fxsbny.css';
import '../../css/l/l77ysscqo.css';
import '../../css/w/wonfncg2h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="cpccgt37i"/><path class="fl_fxsbny"/><path class="l77ysscqo"/><path class="wonfncg2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:hash"} {...others} />);
}

export default Component;
