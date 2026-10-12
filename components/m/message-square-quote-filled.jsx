import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs4529ban.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qs4529ban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:message-square-quote-filled"} {...others} />);
}

export default Component;
