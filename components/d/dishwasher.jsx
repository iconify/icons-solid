import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zpglpo43s.css';
import '../../css/t/tsobq_nda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zpglpo43s"/><path class="tsobq_nda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:dishwasher"} {...others} />);
}

export default Component;
