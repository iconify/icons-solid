import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lws288b7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lws288b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:camera-switch-outline"} {...others} />);
}

export default Component;
