import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsv5t3btn.css';
import '../../css/u/uq14z1bmm.css';
import '../../css/q/qq35bdc4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hsv5t3btn"/><path class="uq14z1bmm"/><path clip-rule="evenodd" class="qq35bdc4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:feed-outline"} {...others} />);
}

export default Component;
