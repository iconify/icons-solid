import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uj6hokfdk.css';
import '../../css/l/lhcx5mbkv.css';
import '../../css/x/xjhjt_0rm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uj6hokfdk"/><path class="lhcx5mbkv"/><path class="xjhjt_0rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:timer-48-bold"} {...others} />);
}

export default Component;
