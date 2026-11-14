import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/juc40xb0w.css';
import '../../css/t/tdqlg5btl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="juc40xb0w"/><path class="tdqlg5btl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:artificial-intelligence-05"} {...others} />);
}

export default Component;
