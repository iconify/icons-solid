import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_4qsubgk.css';
import '../../css/o/omqgt0bhf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_4qsubgk"/><path class="omqgt0bhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-phone-call"} {...others} />);
}

export default Component;
