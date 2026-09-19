import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zdycoj9on.css';
import '../../css/v/vb-je4b_f.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="zdycoj9on"/><path class="vb-je4b_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:thumb-up"} {...others} />);
}

export default Component;
