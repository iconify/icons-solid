import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngz2hwbvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ngz2hwbvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-circle-reply-fill"} {...others} />);
}

export default Component;
