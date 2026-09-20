import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_q9sfwij.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="f_q9sfwij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:capacity-pen-filled"} {...others} />);
}

export default Component;
