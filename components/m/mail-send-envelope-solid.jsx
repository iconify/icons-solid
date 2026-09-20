import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad1b9_ipc.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ad1b9_ipc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:mail-send-envelope-solid"} {...others} />);
}

export default Component;
