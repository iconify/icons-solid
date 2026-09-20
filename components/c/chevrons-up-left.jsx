import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cnc1d6jxb.css';
import '../../css/l/luph5bcfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cnc1d6jxb"/><path class="luph5bcfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevrons-up-left"} {...others} />);
}

export default Component;
