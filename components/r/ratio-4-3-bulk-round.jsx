import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw4zn3u8s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qw4zn3u8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ratio-4-3-bulk-round"} {...others} />);
}

export default Component;
