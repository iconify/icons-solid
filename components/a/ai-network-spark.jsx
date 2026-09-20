import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v8g0qsaqc.css';
import '../../css/d/db0ll9b1s.css';
import '../../css/v/vgpachbif.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="v8g0qsaqc"/><path class="db0ll9b1s"/><path class="vgpachbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ai-network-spark"} {...others} />);
}

export default Component;
