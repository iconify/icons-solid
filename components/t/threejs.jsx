import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvkz6bqs.css';
import '../../css/v/vqu2gdbki.css';
import '../../css/s/ssaqwh2rm.css';
import '../../css/v/v8po-ibke.css';
import '../../css/p/ph8w3jssh.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ddvkz6bqs"><path class="vqu2gdbki"/><path class="ssaqwh2rm"/><path class="v8po-ibke"/><path class="ph8w3jssh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:threejs"} {...others} />);
}

export default Component;
