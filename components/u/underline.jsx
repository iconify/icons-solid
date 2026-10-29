import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obvmtpyhu.css';
import '../../css/t/tqpyvlb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="obvmtpyhu wm-k"/><path class="tqpyvlb9z wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:underline"} {...others} />);
}

export default Component;
