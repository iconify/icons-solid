import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xzz-193mk.css';
import '../../css/x/xopsq8bhy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="xzz-193mk"/><path class="xopsq8bhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:notification-alarm-snooze"} {...others} />);
}

export default Component;
