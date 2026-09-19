import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tydr0ub5b.css';
import '../../css/j/jb41ocrxr.css';
import '../../css/k/ky0y4tb6r.css';
import '../../css/r/r-g9fqc8x.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="tydr0ub5b"/><path clip-rule="evenodd" class="jb41ocrxr"/><path class="ky0y4tb6r"/><path clip-rule="evenodd" class="r-g9fqc8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:door-open-outline"} {...others} />);
}

export default Component;
