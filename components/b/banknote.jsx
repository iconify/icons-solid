import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy2lufbjs.css';
import '../../css/p/psqa162mc.css';
import '../../css/i/ipeafrb_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gy2lufbjs wm-k"/><path class="psqa162mc wm-a"/><path class="ipeafrb_f wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:banknote"} {...others} />);
}

export default Component;
