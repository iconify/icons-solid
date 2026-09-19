import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6b_15jxn.css';
import '../../css/t/t-xc6q1si.css';
import '../../css/q/qqys3bb_x.css';
import '../../css/z/z1nm9ccxf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="h6b_15jxn"/><path class="t-xc6q1si"/><path class="qqys3bb_x"/><path class="z1nm9ccxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-singer"} {...others} />);
}

export default Component;
