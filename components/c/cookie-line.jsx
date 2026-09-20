import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/burq9xbdf.css';
import '../../css/v/vjz9f7byi.css';
import '../../css/z/zt0bu9e2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="burq9xbdf"/><path class="vjz9f7byi"/><path class="zt0bu9e2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cookie-line"} {...others} />);
}

export default Component;
