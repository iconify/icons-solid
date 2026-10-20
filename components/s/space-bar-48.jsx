import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbb7sw9yi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vbb7sw9yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:space-bar-48"} {...others} />);
}

export default Component;
