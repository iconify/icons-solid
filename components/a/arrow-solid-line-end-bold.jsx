import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycgag8hrv.css';
import '../../css/o/o2hokvbbk.css';
import '../../css/f/ft-ma4kga.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ycgag8hrv"/><path class="o2hokvbbk"/><path class="ft-ma4kga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-line-end-bold"} {...others} />);
}

export default Component;
