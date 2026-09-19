import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w-j2olckq.css';
import '../../css/d/d6n-82bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w-j2olckq"/><path class="d6n-82bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:remove-link"} {...others} />);
}

export default Component;
