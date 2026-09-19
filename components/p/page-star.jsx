import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uvqzm2bpy.css';
import '../../css/z/zebskk62u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uvqzm2bpy"/><path class="zebskk62u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:page-star"} {...others} />);
}

export default Component;
