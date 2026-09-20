import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9-e8bcrr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y9-e8bcrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:refresh-4-ai-line"} {...others} />);
}

export default Component;
