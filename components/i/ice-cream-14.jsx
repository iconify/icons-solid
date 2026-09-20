import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve-xwpvcm.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ve-xwpvcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:ice-cream-14"} {...others} />);
}

export default Component;
