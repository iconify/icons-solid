import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nivpnqg4j.css';
import '../../css/p/pddr5rgfp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nivpnqg4j"/><path class="pddr5rgfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sidebar-20-bold"} {...others} />);
}

export default Component;
