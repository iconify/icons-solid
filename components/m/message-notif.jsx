import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rkx84-bxm.css';
import '../../css/g/g4f6fpu0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rkx84-bxm"/><path class="g4f6fpu0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-notif"} {...others} />);
}

export default Component;
