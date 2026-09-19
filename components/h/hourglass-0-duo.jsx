import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcxbg4bau.css';
import '../../css/g/grq3s_b1n.css';
import '../../css/y/y79as4lbn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zcxbg4bau"/><path class="grq3s_b1n"/><path class="y79as4lbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hourglass-0-duo"} {...others} />);
}

export default Component;
