import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/h/hmd6rr.css';
import '../../css/p/pfsmgv.css';
import '../../css/z/zahr3u.css';
import '../../css/s/so-from-70.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c hmd6rr"/><path class="a0m25c pfsmgv"/><path class="a0m25c zahr3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chat-alert"} {...others} />);
}

export default Component;
