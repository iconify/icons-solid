import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jwxtx5bpr.css';
import '../../css/m/m-byr7b4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jwxtx5bpr"/><path class="m-byr7b4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shoes"} {...others} />);
}

export default Component;
