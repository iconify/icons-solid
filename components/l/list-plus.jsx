import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmh5bybsq.css';
import '../../css/d/dhtl_x15l.css';
import '../../css/j/j_sb_ep2n.css';
import '../../css/g/gym0h7tyy.css';
import '../../css/y/ynoxllbnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmh5bybsq wm-shadow"/><path class="dhtl_x15l wm-k"/><path class="j_sb_ep2n wm-k"/><path class="gym0h7tyy wm-s"/><path class="wm-s ynoxllbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:list-plus"} {...others} />);
}

export default Component;
