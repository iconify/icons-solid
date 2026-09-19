import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqt1bybxr.css';
import '../../css/p/p6va2jbdp.css';
import '../../css/h/htfz8x6gt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="qqt1bybxr"/><path clip-rule="evenodd" class="p6va2jbdp"/><path class="htfz8x6gt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:speaker"} {...others} />);
}

export default Component;
