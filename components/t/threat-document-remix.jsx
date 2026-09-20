import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8r0ucb_k.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="l8r0ucb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:threat-document-remix"} {...others} />);
}

export default Component;
