import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m0ndhbucz.css';
import '../../css/b/bg5nqxm8l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="m0ndhbucz"/><rect class="bg5nqxm8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-smart-watch-2-device-square-timepiece-computer-electronics-face-blank-watch-smart"} {...others} />);
}

export default Component;
