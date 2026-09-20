import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_9ss8z2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_9ss8z2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:thumb-up-fill"} {...others} />);
}

export default Component;
