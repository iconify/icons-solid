import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znqcvhbmw.css';
import '../../css/x/xmo5rcozs.css';
import '../../css/w/w_5epib3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="znqcvhbmw"/><path class="xmo5rcozs"/><path clip-rule="evenodd" class="w_5epib3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:coins-filled"} {...others} />);
}

export default Component;
