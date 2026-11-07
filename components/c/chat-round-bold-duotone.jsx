import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3zoptn7o.css';
import '../../css/g/gc83r37zp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q3zoptn7o"/><path class="gc83r37zp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-bold-duotone"} {...others} />);
}

export default Component;
