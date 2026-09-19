import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7f7ozbam.css';
import '../../css/s/sg8-s5bcj.css';
import '../../css/f/f4auaccww.css';
import '../../css/w/wg-9_kb5r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="n7f7ozbam"/><path clip-rule="evenodd" class="sg8-s5bcj"/><path class="f4auaccww"/><path clip-rule="evenodd" class="wg-9_kb5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-tongue-squint-outline"} {...others} />);
}

export default Component;
