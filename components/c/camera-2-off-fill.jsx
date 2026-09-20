import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt1553bbb.css';
import '../../css/i/iua5r4byv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mt1553bbb"/><path class="iua5r4byv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:camera-2-off-fill"} {...others} />);
}

export default Component;
