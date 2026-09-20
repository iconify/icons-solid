import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tch1x7qyd.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="tch1x7qyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-button-left-arrow-keyboard-left"} {...others} />);
}

export default Component;
