import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f14q2uffn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="f14q2uffn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shift-flat"} {...others} />);
}

export default Component;
