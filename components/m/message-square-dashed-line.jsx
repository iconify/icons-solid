import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbeg3bu9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbeg3bu9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-square-dashed-line"} {...others} />);
}

export default Component;
