import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5ibjvb-k.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="t5ibjvb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:fit-to-height-square-solid"} {...others} />);
}

export default Component;
