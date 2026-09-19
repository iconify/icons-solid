import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzdm7fsxu.css';
import '../../css/l/lw4h2zb0z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wzdm7fsxu"/><path class="lw4h2zb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:push-outline"} {...others} />);
}

export default Component;
