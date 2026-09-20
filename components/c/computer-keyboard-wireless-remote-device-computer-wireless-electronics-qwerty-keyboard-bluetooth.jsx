import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/so40fg5pg.css';
import '../../css/z/zzv7ebfeu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="so40fg5pg"/><path class="zzv7ebfeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-keyboard-wireless-remote-device-computer-wireless-electronics-qwerty-keyboard-bluetooth"} {...others} />);
}

export default Component;
