import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbapnjbsw.css';
import '../../css/y/y8qqoxbhq.css';
import '../../css/e/e5uqx_bmc.css';
import '../../css/v/v0sd4zb-w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nbapnjbsw"/><path class="y8qqoxbhq"/><path class="e5uqx_bmc"/><path class="v0sd4zb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:svgr"} {...others} />);
}

export default Component;
