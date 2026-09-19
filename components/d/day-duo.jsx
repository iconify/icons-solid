import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b80p1rbvv.css';
import '../../css/m/momohwbsb.css';
import '../../css/q/qr3zbyjzb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="b80p1rbvv"/><path class="momohwbsb"/><path class="qr3zbyjzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:day-duo"} {...others} />);
}

export default Component;
