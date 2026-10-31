import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdftbpbaj.css';
import '../../css/j/j4lu8gyen.css';
import '../../css/q/qmrxzvmyf.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wdftbpbaj"/><path class="j4lu8gyen"/><path class="qmrxzvmyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:samoa"} {...others} />);
}

export default Component;
