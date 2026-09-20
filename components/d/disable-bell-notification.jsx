import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zc8ok-1fu.css';
import '../../css/k/klganmbfx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="zc8ok-1fu"/><path class="klganmbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:disable-bell-notification"} {...others} />);
}

export default Component;
