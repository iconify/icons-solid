import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxou2p47l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxou2p47l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:alarm-1-line"} {...others} />);
}

export default Component;
