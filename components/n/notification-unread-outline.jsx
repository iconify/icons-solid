import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vheb2-beq.css';
import '../../css/u/ubakjmb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vheb2-beq"/><path clip-rule="evenodd" class="ubakjmb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-unread-outline"} {...others} />);
}

export default Component;
