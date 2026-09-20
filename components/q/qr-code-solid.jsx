import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb8m4hn8n.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="tb8m4hn8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:qr-code-solid"} {...others} />);
}

export default Component;
