import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5rfeac2l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a5rfeac2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:touch-filled"} {...others} />);
}

export default Component;
