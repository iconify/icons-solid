import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2a3fl7wn.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="p2a3fl7wn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:button-rewind-2-flat"} {...others} />);
}

export default Component;
