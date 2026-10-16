import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv4p-irnn.css';
import '../../css/m/moo4i7zmp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pv4p-irnn"/><path class="moo4i7zmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-dual-20"} {...others} />);
}

export default Component;
