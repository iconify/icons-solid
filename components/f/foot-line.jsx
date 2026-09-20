import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsxbycckc.css';
import '../../css/i/i4nhh7ann.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dsxbycckc"/><path class="i4nhh7ann"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:foot-line"} {...others} />);
}

export default Component;
