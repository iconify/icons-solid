import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xo4-_ebwm.css';
import '../../css/q/q64hre9aw.css';
import '../../css/l/l7mrtfukn.css';
import '../../css/i/i460-zgba.css';
import '../../css/x/xgckkubpr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="xo4-_ebwm"/><path class="q64hre9aw"/><path class="l7mrtfukn"/><path class="i460-zgba"/><path class="xgckkubpr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:scan-setting"} {...others} />);
}

export default Component;
