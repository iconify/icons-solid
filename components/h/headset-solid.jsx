import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gr6bpbbmd.css';
import '../../css/r/rfyy1zshr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gr6bpbbmd"/><path class="rfyy1zshr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:headset-solid"} {...others} />);
}

export default Component;
