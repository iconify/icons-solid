import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkntsabjl.css';
import '../../css/s/si3vjzbss.css';
import '../../css/w/w2qia4l8w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="bkntsabjl"/><path class="si3vjzbss"/><path clip-rule="evenodd" class="w2qia4l8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:star-of-david"} {...others} />);
}

export default Component;
