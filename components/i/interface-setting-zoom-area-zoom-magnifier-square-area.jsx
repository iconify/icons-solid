import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g6xke3b1h.css';
import '../../css/g/g_xqm8rqg.css';
import '../../css/m/m7wu20bif.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="g6xke3b1h"/><circle class="g_xqm8rqg"/><path class="m7wu20bif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-zoom-area-zoom-magnifier-square-area"} {...others} />);
}

export default Component;
