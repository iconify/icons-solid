import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7ppz5bmi.css';
import '../../css/q/qzjy3eb0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e7ppz5bmi"/><path class="qzjy3eb0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:computer-dollar"} {...others} />);
}

export default Component;
