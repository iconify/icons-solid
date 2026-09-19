import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/je98fibcj.css';
import '../../css/p/p3wftabhp.css';
import '../../css/k/kt_vqgb8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="je98fibcj"/><path class="p3wftabhp"/><path class="kt_vqgb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rainbow"} {...others} />);
}

export default Component;
