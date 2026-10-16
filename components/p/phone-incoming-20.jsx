import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2m65bbab.css';
import '../../css/g/gcpnklyer.css';
import '../../css/k/kqncv3w7c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f2m65bbab"/><path class="gcpnklyer"/><path class="kqncv3w7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-incoming-20"} {...others} />);
}

export default Component;
