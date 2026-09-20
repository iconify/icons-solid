import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa27qpbce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pa27qpbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:explicit-filled"} {...others} />);
}

export default Component;
