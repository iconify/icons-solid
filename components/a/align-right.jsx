import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwmihpx1r.css';
import '../../css/j/jtl6p1bbt.css';
import '../../css/j/j-5m3q74g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mwmihpx1r wm-shadow"/><path class="jtl6p1bbt wm-k"/><path class="j-5m3q74g wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:align-right"} {...others} />);
}

export default Component;
