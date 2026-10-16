import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qiqnuhsan.css';
import '../../css/z/zzrqikhhv.css';
import '../../css/h/hb-shkb1m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qiqnuhsan"/><path class="zzrqikhhv"/><path class="hb-shkb1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:synchronous-condenser-20"} {...others} />);
}

export default Component;
