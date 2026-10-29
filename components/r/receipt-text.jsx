import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r16ehcbid.css';
import '../../css/d/d88x2q9fj.css';
import '../../css/y/ysgasiwou.css';
import '../../css/t/taibokb6s.css';
import '../../css/b/b_3iyfbtu.css';
import '../../css/r/rn9at2b7a.css';
import '../../css/n/nhb4n0x_n.css';
import '../../css/q/qm67cccjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r16ehcbid wm-shadow"/><path class="d88x2q9fj wm-k"/><path class="wm-k ysgasiwou"/><path class="taibokb6s wm-k"/><path class="b_3iyfbtu wm-k"/><path class="rn9at2b7a wm-shine"/><path class="nhb4n0x_n wm-k"/><path class="qm67cccjt wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:receipt-text"} {...others} />);
}

export default Component;
