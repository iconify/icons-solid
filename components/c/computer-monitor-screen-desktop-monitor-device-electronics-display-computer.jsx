import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ezr9er75u.css';
import '../../css/f/f_de1-tnn.css';
import '../../css/a/a96cksb_s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ezr9er75u"/><rect class="f_de1-tnn"/><path class="a96cksb_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-monitor-screen-desktop-monitor-device-electronics-display-computer"} {...others} />);
}

export default Component;
