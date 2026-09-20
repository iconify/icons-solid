import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mrm_9ubbq.css';
import '../../css/w/wn69pqbul.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="mrm_9ubbq"/><path class="wn69pqbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:laptop"} {...others} />);
}

export default Component;
