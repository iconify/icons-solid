import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t34oqh5ni.css';
import '../../css/h/hgqetwbkn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="t34oqh5ni"/><path class="hgqetwbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:graduation-cap"} {...others} />);
}

export default Component;
