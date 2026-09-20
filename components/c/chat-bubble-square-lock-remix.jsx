import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zf38b-6ex.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="zf38b-6ex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chat-bubble-square-lock-remix"} {...others} />);
}

export default Component;
