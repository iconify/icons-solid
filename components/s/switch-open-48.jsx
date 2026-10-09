import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-dmmacii.css';
import '../../css/b/bo2mh3bzn.css';
import '../../css/u/ua8x71bme.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j-dmmacii"/><path class="bo2mh3bzn"/><path class="ua8x71bme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:switch-open-48"} {...others} />);
}

export default Component;
