import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbpvdiwho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vbpvdiwho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-eraser"} {...others} />);
}

export default Component;
