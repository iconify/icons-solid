import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vwda8eber.css';
import '../../css/a/a7c1ucbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vwda8eber"/><path class="a7c1ucbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-activity"} {...others} />);
}

export default Component;
