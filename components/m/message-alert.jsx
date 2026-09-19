import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qqw8vbcel.css';
import '../../css/g/gjsnwctbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qqw8vbcel"/><path class="gjsnwctbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:message-alert"} {...others} />);
}

export default Component;
