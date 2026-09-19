import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psx3-w2jj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="psx3-w2jj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-left-arrow-alt"} {...others} />);
}

export default Component;
