import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmtq3ybvx.css';
import '../../css/f/fu72iwgtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmtq3ybvx"/><path class="fu72iwgtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-circle-code"} {...others} />);
}

export default Component;
