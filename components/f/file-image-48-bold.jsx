import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdos38jip.css';
import '../../css/k/kcfd8k4na.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pdos38jip"/><path class="kcfd8k4na"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-image-48-bold"} {...others} />);
}

export default Component;
