import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qo5e1pbwe.css';
import '../../css/w/w6h27un-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qo5e1pbwe"/><path class="w6h27un-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:computer-protection"} {...others} />);
}

export default Component;
