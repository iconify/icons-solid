import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsbw0xb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wsbw0xb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-double-se-nw"} {...others} />);
}

export default Component;
