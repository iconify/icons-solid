import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfkjynb6a.css';
import '../../css/s/s55ofxbqw.css';
import '../../css/r/rvqiwkblr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="jfkjynb6a"/><path class="s55ofxbqw"/><path class="rvqiwkblr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:toggle-1-duo"} {...others} />);
}

export default Component;
