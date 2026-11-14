import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e66t5r5_o.css';
import '../../css/b/baw-0mvfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e66t5r5_o"/><path class="baw-0mvfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:artificial-intelligence-06"} {...others} />);
}

export default Component;
