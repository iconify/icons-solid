import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyg_4gbyx.css';
import '../../css/x/xua85z4wn.css';
import '../../css/p/petbblbsk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nyg_4gbyx"/><path class="xua85z4wn"/><path class="petbblbsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-48"} {...others} />);
}

export default Component;
