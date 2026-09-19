import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zoywegbvg.css';
import '../../css/z/zwwuljxif.css';
import '../../css/e/e0chke9dm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zoywegbvg"/><path class="zwwuljxif"/><path class="e0chke9dm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:robot-head-duo"} {...others} />);
}

export default Component;
