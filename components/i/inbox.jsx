import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjru-6baq.css';
import '../../css/z/zuoywsbmk.css';
import '../../css/d/derohqbjg.css';
import '../../css/m/mmuma3b-n.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tjru-6baq"/><path class="zuoywsbmk"/><path clip-rule="evenodd" class="derohqbjg"/><path class="mmuma3b-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:inbox"} {...others} />);
}

export default Component;
