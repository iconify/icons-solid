import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/guxh3kbks.css';
import '../../css/k/kxaa53mkw.css';
import '../../css/j/jne0vqbiu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="guxh3kbks"/><path clip-rule="evenodd" class="kxaa53mkw"/><path class="jne0vqbiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:street-view"} {...others} />);
}

export default Component;
