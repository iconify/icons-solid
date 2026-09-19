import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xdadzovzv.css';
import '../../css/z/zebsf4wkp.css';
import '../../css/d/dfl2z7ovp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xdadzovzv"/><path class="zebsf4wkp"/><path class="dfl2z7ovp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bubble-chat-notification"} {...others} />);
}

export default Component;
