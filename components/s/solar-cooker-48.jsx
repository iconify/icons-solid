import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr71bdctn.css';
import '../../css/k/kezkawjrn.css';
import '../../css/c/czpegmbjb.css';
import '../../css/s/ss_828btg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wr71bdctn"/><path class="kezkawjrn"/><path class="czpegmbjb"/><path class="ss_828btg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-cooker-48"} {...others} />);
}

export default Component;
