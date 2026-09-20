import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7n0tensn.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="s7n0tensn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:blood-donate-drop-solid"} {...others} />);
}

export default Component;
