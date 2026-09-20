import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x350pgbgj.css';
import '../../css/m/mh3hx2bez.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="x350pgbgj"/><path class="mh3hx2bez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:paintbrush-2"} {...others} />);
}

export default Component;
