import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yc_xac4xc.css';
import '../../css/n/nv37vxbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yc_xac4xc"/><path class="nv37vxbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:html-5"} {...others} />);
}

export default Component;
