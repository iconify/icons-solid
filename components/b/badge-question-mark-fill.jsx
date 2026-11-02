import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq8hgf16d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mq8hgf16d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:badge-question-mark-fill"} {...others} />);
}

export default Component;
