import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itv2ip3np.css';
import '../../css/w/wio05-bap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="itv2ip3np"/><path clip-rule="evenodd" class="wio05-bap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:moon-stars-line"} {...others} />);
}

export default Component;
