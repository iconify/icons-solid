import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo-p9zbnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fo-p9zbnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-2-ai-fill"} {...others} />);
}

export default Component;
