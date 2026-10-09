import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwgv7ib-v.css';
import '../../css/v/vk1vhpblr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jwgv7ib-v"/><path class="vk1vhpblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:audit-48-bold"} {...others} />);
}

export default Component;
