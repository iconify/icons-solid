import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/shlcypgis.css';
import '../../css/p/pi3qt6bpu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="shlcypgis"/><path class="pi3qt6bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:erlenmeyer-flask"} {...others} />);
}

export default Component;
