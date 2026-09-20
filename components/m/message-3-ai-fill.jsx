import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3ji-5l8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r3ji-5l8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-3-ai-fill"} {...others} />);
}

export default Component;
