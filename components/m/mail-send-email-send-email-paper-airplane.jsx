import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtvj1dvjh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="gtvj1dvjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mail-send-email-send-email-paper-airplane"} {...others} />);
}

export default Component;
