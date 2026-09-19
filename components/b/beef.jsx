import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vlfpssodi.css';
import '../../css/y/yqqkq0b3t.css';
import '../../css/m/maynlgbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="vlfpssodi"/><path class="yqqkq0b3t"/><path class="maynlgbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:beef"} {...others} />);
}

export default Component;
