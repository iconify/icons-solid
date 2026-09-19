import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ae6uo6b7p.css';
import '../../css/x/xtl2bkbxy.css';
import '../../css/h/h038b5hlx.css';
import '../../css/o/oxw8l6wad.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ae6uo6b7p"/><path class="xtl2bkbxy"/><path clip-rule="evenodd" class="h038b5hlx"/><path class="oxw8l6wad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:fahrenheit-outline"} {...others} />);
}

export default Component;
