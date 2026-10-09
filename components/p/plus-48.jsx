import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df1n7oboy.css';
import '../../css/a/a_knjioaa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="df1n7oboy"/><path class="a_knjioaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plus-48"} {...others} />);
}

export default Component;
