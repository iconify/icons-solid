import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqbn7bbia.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="kqbn7bbia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-attachment-2-attachment-link-paperclip-unlink"} {...others} />);
}

export default Component;
