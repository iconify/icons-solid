import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iv-0yvyvl.css';
import '../../css/m/m4c2jibyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iv-0yvyvl"/><path class="m4c2jibyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:tools"} {...others} />);
}

export default Component;
