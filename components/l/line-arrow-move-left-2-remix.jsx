import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pacc4ybvb.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="pacc4ybvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:line-arrow-move-left-2-remix"} {...others} />);
}

export default Component;
