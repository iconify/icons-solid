import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-7rukgbc.css';
import '../../css/l/lu1huab3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z-7rukgbc"/><path class="lu1huab3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:send-email-paper-plane-1"} {...others} />);
}

export default Component;
