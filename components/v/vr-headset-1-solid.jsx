import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jej-03bee.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="jej-03bee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:vr-headset-1-solid"} {...others} />);
}

export default Component;
