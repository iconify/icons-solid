import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4z4cgbwk.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="x4z4cgbwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:graph-bar-decrease-solid"} {...others} />);
}

export default Component;
