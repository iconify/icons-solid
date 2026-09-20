import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xynxlqa_i.css';
import '../../css/y/yw3hpp55v.css';
import '../../css/x/xlc37kpur.css';
import '../../css/u/ukwo1-hmt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xynxlqa_i"/><path class="yw3hpp55v"/><path class="xlc37kpur"/><path class="ukwo1-hmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:package-dimension"} {...others} />);
}

export default Component;
