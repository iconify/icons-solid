import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hpa0eudhu.css';
import '../../css/k/kg-u_fb3q.css';
import '../../css/d/d9tuwubhk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="hpa0eudhu"/><path class="kg-u_fb3q"/><path class="d9tuwubhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mobile-phone-camera"} {...others} />);
}

export default Component;
