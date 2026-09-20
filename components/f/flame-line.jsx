import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgp09xbhr.css';
import '../../css/i/i1tveqj0p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lgp09xbhr"/><path class="i1tveqj0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:flame-line"} {...others} />);
}

export default Component;
