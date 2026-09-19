import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yymxa77sn.css';
import '../../css/h/hy-ukhbzh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="yymxa77sn"/><path class="hy-ukhbzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cloud-upload"} {...others} />);
}

export default Component;
