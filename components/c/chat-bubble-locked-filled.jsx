import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecwn0mb8b.css';
import '../../css/b/beq9-lbqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ecwn0mb8b"/><path class="beq9-lbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chat-bubble-locked-filled"} {...others} />);
}

export default Component;
