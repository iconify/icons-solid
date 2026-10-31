import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc8mw0b7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vc8mw0b7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:desktop-fill-round"} {...others} />);
}

export default Component;
