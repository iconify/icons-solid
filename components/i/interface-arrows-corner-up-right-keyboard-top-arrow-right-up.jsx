import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1zjupb4e.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="w1zjupb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up"} {...others} />);
}

export default Component;
