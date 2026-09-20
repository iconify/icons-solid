import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w8o-t1qhy.css';
import '../../css/v/vpml54dlz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="w8o-t1qhy"/><path class="vpml54dlz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:less-than-sign-circle"} {...others} />);
}

export default Component;
