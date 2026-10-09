import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtk7136by.css';
import '../../css/i/i3cagyb-j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qtk7136by"/><path class="i3cagyb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:send-48"} {...others} />);
}

export default Component;
