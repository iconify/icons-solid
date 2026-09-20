import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wacgaabsd.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wacgaabsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-flip-right-flip-right-object-work"} {...others} />);
}

export default Component;
