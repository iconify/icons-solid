import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_8c5nbpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_8c5nbpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-envelope"} {...others} />);
}

export default Component;
