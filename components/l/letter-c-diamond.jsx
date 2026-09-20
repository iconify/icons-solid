import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u9xhcm61i.css';
import '../../css/i/idlw553oh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u9xhcm61i"/><path class="idlw553oh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-c-diamond"} {...others} />);
}

export default Component;
