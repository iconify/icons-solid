import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpxwtybmx.css';
import '../../css/n/n9tjabbib.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mpxwtybmx"/><path class="n9tjabbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tanker-truck-20-bold"} {...others} />);
}

export default Component;
