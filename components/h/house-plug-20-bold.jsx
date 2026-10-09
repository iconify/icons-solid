import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coivkzecr.css';
import '../../css/f/fengbsb3f.css';
import '../../css/n/n1tbb-ujx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="coivkzecr"/><path class="fengbsb3f"/><path class="n1tbb-ujx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-plug-20-bold"} {...others} />);
}

export default Component;
