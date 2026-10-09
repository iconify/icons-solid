import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnweauo-a.css';
import '../../css/f/ffopgc0dq.css';
import '../../css/f/f2ky81b6t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nnweauo-a"/><path class="ffopgc0dq"/><path class="f2ky81b6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camper-van-48"} {...others} />);
}

export default Component;
