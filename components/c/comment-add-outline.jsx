import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlx_4mbot.css';
import '../../css/k/kqg7zabzh.css';
import '../../css/d/d2q55zbzu.css';
import '../../css/f/fudyny6gj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nlx_4mbot"/><path clip-rule="evenodd" class="kqg7zabzh"/><path class="d2q55zbzu"/><path clip-rule="evenodd" class="fudyny6gj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:comment-add-outline"} {...others} />);
}

export default Component;
