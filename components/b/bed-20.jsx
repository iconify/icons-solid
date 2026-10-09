import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm_jeenba.css';
import '../../css/k/k0o87zohe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jm_jeenba"/><path class="k0o87zohe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bed-20"} {...others} />);
}

export default Component;
