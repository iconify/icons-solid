import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/boiwm4w4j.css';
import '../../css/t/tm6rd794g.css';
import '../../css/k/k3t8hmbrn.css';
import '../../css/n/nxn8obbav.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="boiwm4w4j"/><path class="tm6rd794g"/><path class="k3t8hmbrn"/><path class="nxn8obbav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-people-outline"} {...others} />);
}

export default Component;
