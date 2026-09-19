import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hpv2i1bqe.css';
import '../../css/l/lzoumbbkv.css';
import '../../css/q/qiijr8jch.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="hpv2i1bqe"/><path class="lzoumbbkv"/><path class="qiijr8jch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-in-motorized-wheelchair"} {...others} />);
}

export default Component;
