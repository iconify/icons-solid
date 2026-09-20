import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8pxjbblv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="x8pxjbblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-corner-down-right-down-keyboard-arrow-right-bottom"} {...others} />);
}

export default Component;
