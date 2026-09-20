import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wjb-qjb-s.css';
import '../../css/d/dz0adcc6w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="wjb-qjb-s"/><path class="dz0adcc6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:megaphone-1"} {...others} />);
}

export default Component;
