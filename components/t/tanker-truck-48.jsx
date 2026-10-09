import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m35bxhbui.css';
import '../../css/q/q0uyhzb7z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m35bxhbui"/><path class="q0uyhzb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tanker-truck-48"} {...others} />);
}

export default Component;
