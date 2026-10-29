import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnxnwq8hh.css';
import '../../css/p/po8h0gtik.css';
import '../../css/f/f9qltmizw.css';
import '../../css/r/rrm9xhbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k wnxnwq8hh"/><path class="po8h0gtik wm-k"/><path class="f9qltmizw wm-a"/><path class="rrm9xhbvj wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rabbit"} {...others} />);
}

export default Component;
