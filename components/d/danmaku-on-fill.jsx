import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/ximv8ihgl.css';
import '../../css/p/pl259k1fn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ximv8ihgl"/><path class="pl259k1fn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:danmaku-on-fill"} {...others} />);
}

export default Component;
