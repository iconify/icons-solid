import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zd8q09i1h.css';
import '../../css/d/d85ks6bxl.css';
import '../../css/n/nje5g0bbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zd8q09i1h"/><path class="d85ks6bxl"/><path class="nje5g0bbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:multiple-pages-minus"} {...others} />);
}

export default Component;
