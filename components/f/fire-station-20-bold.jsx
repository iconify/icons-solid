import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prssdsbsb.css';
import '../../css/p/p90oggben.css';
import '../../css/i/i59ju7bdr.css';
import '../../css/y/y77ro9r-x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="prssdsbsb"/><path class="p90oggben"/><path class="i59ju7bdr"/><path class="y77ro9r-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-station-20-bold"} {...others} />);
}

export default Component;
