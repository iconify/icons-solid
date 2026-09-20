import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn8x0ybtd.css';
import '../../css/s/sxeq1hglr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mn8x0ybtd"/><path class="sxeq1hglr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chat-two-bubbles-oval-solid"} {...others} />);
}

export default Component;
