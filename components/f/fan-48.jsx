import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqgchhb5i.css';
import '../../css/i/i5i-ymejz.css';
import '../../css/m/manzvwbsi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eqgchhb5i"/><path class="i5i-ymejz"/><path class="manzvwbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fan-48"} {...others} />);
}

export default Component;
