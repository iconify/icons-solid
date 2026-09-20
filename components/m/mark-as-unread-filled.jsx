import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emh9t9b8k.css';
import '../../css/t/tvods8eyi.css';
import '../../css/h/hidh8db6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="emh9t9b8k"/><path class="tvods8eyi"/><path class="hidh8db6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mark-as-unread-filled"} {...others} />);
}

export default Component;
