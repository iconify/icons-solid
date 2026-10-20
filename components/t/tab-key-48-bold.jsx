import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpjqvnoqu.css';
import '../../css/v/vgkf1kbba.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wpjqvnoqu"/><path class="vgkf1kbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tab-key-48-bold"} {...others} />);
}

export default Component;
