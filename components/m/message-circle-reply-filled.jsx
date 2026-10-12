import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2a0yub0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r2a0yub0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:message-circle-reply-filled"} {...others} />);
}

export default Component;
