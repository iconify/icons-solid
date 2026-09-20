import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6w_a129j.css';
import '../../css/z/zsup6ib6x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p6w_a129j"/><path class="zsup6ib6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chat-bubble-oval-notification-solid"} {...others} />);
}

export default Component;
