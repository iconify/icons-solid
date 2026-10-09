import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpbaf1bjq.css';
import '../../css/v/vjt9g6_xg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wpbaf1bjq"/><path class="vjt9g6_xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:palette-48-bold"} {...others} />);
}

export default Component;
