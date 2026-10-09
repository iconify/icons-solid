import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd5gw_41x.css';
import '../../css/z/zr8xy7d1h.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/j/j4h28gm6a.css';
import '../../css/t/ts4yc_bpq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xd5gw_41x"/><path class="zr8xy7d1h"/><path class="ihmii9b0s"/><path class="j4h28gm6a"/><path class="ts4yc_bpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rewilding-48-bold"} {...others} />);
}

export default Component;
