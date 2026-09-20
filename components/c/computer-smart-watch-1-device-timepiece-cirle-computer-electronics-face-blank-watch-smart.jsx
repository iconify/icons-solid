import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/ntpd7fc4k.css';
import '../../css/u/ue9vnkbdf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="ntpd7fc4k"/><path class="ue9vnkbdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-smart-watch-1-device-timepiece-cirle-computer-electronics-face-blank-watch-smart"} {...others} />);
}

export default Component;
