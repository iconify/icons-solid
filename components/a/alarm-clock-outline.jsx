import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vr4c1aboa.css';
import '../../css/g/gjl42zb6j.css';
import '../../css/n/n7ba8ub3q.css';
import '../../css/b/bzi6o7khf.css';
import '../../css/t/t3337bp3o.css';
import '../../css/t/t2n2r8bbc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vr4c1aboa"/><path class="gjl42zb6j"/><path clip-rule="evenodd" class="n7ba8ub3q"/><path clip-rule="evenodd" class="bzi6o7khf"/><path class="t3337bp3o"/><path clip-rule="evenodd" class="t2n2r8bbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:alarm-clock-outline"} {...others} />);
}

export default Component;
