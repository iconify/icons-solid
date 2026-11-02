import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owm-0ybmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="owm-0ybmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:emergency-flashers-line"} {...others} />);
}

export default Component;
