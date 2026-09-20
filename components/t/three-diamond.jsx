import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q5nhzubma.css';
import '../../css/i/idlw553oh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q5nhzubma"/><path class="idlw553oh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:three-diamond"} {...others} />);
}

export default Component;
