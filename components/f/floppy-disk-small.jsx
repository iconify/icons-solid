import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk1f5g_bz.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="vk1f5g_bz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:floppy-disk-small"} {...others} />);
}

export default Component;
