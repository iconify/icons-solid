import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_736ebfb.css';
import '../../css/w/w0poz4bns.css';
import '../../css/h/h3-00cbib.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k_736ebfb"/><path class="w0poz4bns"/><path class="h3-00cbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-play-20-bold"} {...others} />);
}

export default Component;
