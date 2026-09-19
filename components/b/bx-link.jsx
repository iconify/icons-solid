import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqu73ccux.css';
import '../../css/c/ccr-r5nke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hqu73ccux"/><path class="ccr-r5nke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-link"} {...others} />);
}

export default Component;
