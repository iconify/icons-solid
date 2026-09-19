import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zezc3ma4d.css';
import '../../css/x/xjh_mnkco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zezc3ma4d"/><path class="xjh_mnkco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:honour-star"} {...others} />);
}

export default Component;
