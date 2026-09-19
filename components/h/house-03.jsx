import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjlogeiow.css';
import '../../css/e/e78cadrgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sjlogeiow"/><path class="e78cadrgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:house-03"} {...others} />);
}

export default Component;
