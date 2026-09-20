import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u46bu-2ul.css';
import '../../css/t/tss_5rb0s.css';
import '../../css/d/dj7yv-i3u.css';
import '../../css/w/wxqbfhwkx.css';
import '../../css/f/f2hh-jbjl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u46bu-2ul"/><path class="tss_5rb0s"/><path class="dj7yv-i3u"/><path class="wxqbfhwkx"/><path class="f2hh-jbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smiley-cool"} {...others} />);
}

export default Component;
