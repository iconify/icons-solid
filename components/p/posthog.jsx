import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbssek_nw.css';
import '../../css/p/pv56n73nc.css';
import '../../css/a/a47dmxbwp.css';
import '../../css/p/pkcocdbmn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vbssek_nw"/><path class="pv56n73nc"/><path class="a47dmxbwp"/><path class="pkcocdbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:posthog"} {...others} />);
}

export default Component;
