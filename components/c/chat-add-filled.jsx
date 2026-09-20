import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zaukvj20g.css';
import '../../css/b/b0-egysls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zaukvj20g"/><path class="b0-egysls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chat-add-filled"} {...others} />);
}

export default Component;
