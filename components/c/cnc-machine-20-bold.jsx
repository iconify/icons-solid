import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aegej5mnd.css';
import '../../css/o/oyd37-buh.css';
import '../../css/n/nryc-8-0d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aegej5mnd"/><path class="oyd37-buh"/><path class="nryc-8-0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cnc-machine-20-bold"} {...others} />);
}

export default Component;
