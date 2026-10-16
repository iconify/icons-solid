import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4w681bdr.css';
import '../../css/j/j-f5_l35o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z4w681bdr"/><path class="j-f5_l35o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:antenna-48-bold"} {...others} />);
}

export default Component;
