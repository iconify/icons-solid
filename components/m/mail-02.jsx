import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h88haibia.css';
import '../../css/a/aeapd2ack.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h88haibia"/><path class="aeapd2ack"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-02"} {...others} />);
}

export default Component;
