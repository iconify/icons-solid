import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/la9i8y6nd.css';
import '../../css/c/c8jcj_qhj.css';
import '../../css/z/z2vp3obet.css';
import '../../css/j/jj_oncb1i.css';
import '../../css/b/bg53-whty.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="la9i8y6nd"/><path class="c8jcj_qhj"/><path class="z2vp3obet"/><path class="jj_oncb1i"/><path class="bg53-whty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:canoe"} {...others} />);
}

export default Component;
