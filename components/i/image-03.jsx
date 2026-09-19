import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pd5v96lzw.css';
import '../../css/y/yopadjb1x.css';
import '../../css/j/jsn7psb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pd5v96lzw"/><circle class="yopadjb1x"/><path class="jsn7psb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-03"} {...others} />);
}

export default Component;
