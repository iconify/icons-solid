import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbo_5h3_g.css';
import '../../css/a/aohc2wbew.css';
import '../../css/h/hss_7gbmm.css';
import '../../css/w/wb3b4xbcv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fbo_5h3_g"/><path class="aohc2wbew"/><path class="hss_7gbmm"/><path class="wb3b4xbcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-queue-48"} {...others} />);
}

export default Component;
