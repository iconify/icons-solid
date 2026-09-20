import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4_k3cbia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4_k3cbia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:toggle-switch-outline"} {...others} />);
}

export default Component;
