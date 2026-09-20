import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9l2s-gon.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="y9l2s-gon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:help-chat-1-solid"} {...others} />);
}

export default Component;
