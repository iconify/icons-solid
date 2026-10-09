import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5dz5-btu.css';
import '../../css/e/e8z4a313a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r5dz5-btu"/><path class="e8z4a313a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badge-20"} {...others} />);
}

export default Component;
