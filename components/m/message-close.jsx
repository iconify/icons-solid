import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qr5qhybdn.css';
import '../../css/f/ftg34obra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qr5qhybdn"/><path class="ftg34obra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:message-close"} {...others} />);
}

export default Component;
