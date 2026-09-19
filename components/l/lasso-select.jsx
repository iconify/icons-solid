import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s_tr8_b_s.css';
import '../../css/r/r3yzx8bla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s_tr8_b_s"/><path class="r3yzx8bla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lasso-select"} {...others} />);
}

export default Component;
