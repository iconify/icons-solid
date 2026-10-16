import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfi5rmbhp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vfi5rmbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:line-fault-48-bold"} {...others} />);
}

export default Component;
