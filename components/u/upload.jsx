import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmj13wb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xmj13wb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:upload"} {...others} />);
}

export default Component;
