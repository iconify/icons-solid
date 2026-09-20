import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd6hm15ed.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cd6hm15ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mail-send-email-message-flat"} {...others} />);
}

export default Component;
