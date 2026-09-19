import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1omykbrh.css';
import '../../css/w/wl7htwwai.css';
import '../../css/q/q-uzbtb2m.css';
import '../../css/q/qk7-e396t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="k1omykbrh"/><path class="wl7htwwai"/><path class="q-uzbtb2m"/><path class="qk7-e396t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:link-outline"} {...others} />);
}

export default Component;
