import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p56h_bbeb.css';
import '../../css/b/bhtd76b5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p56h_bbeb"/><path class="bhtd76b5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-dots-2"} {...others} />);
}

export default Component;
