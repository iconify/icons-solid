import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsfzl1bhj.css';
import '../../css/d/dtsd2ea6d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rsfzl1bhj"/><path class="dtsd2ea6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bungalow-48"} {...others} />);
}

export default Component;
