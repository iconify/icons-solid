import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z82wjixvo.css';
import '../../css/r/rxcsbu8ge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="z82wjixvo"/><path class="rxcsbu8ge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rewind-sharp-two-tone"} {...others} />);
}

export default Component;
