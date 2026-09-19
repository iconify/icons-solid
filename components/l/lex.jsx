import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkxxtlbau.css';

const viewBox = {"width":500,"height":512};
const content = `<path clip-rule="evenodd" class="qkxxtlbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:lex"} {...others} />);
}

export default Component;
