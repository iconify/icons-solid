import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z78iq229s.css';
import '../../css/e/e37y0sbcn.css';
import '../../css/m/mig00zq1z.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="z78iq229s"/><path clip-rule="evenodd" class="e37y0sbcn"/><path class="mig00zq1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:film"} {...others} />);
}

export default Component;
