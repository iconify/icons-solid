import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqi61oiua.css';
import '../../css/q/qn3bz8dmg.css';
import '../../css/v/vlmukv79m.css';
import '../../css/s/s2v9muxhw.css';
import '../../css/m/mhojecb6r.css';
import '../../css/h/hl5q1ibmh.css';
import '../../css/r/r45wvxbiz.css';
import '../../css/n/no54jfzzp.css';
import '../../css/b/b3xrvko0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow wqi61oiua"/><path class="qn3bz8dmg wm-k"/><path class="vlmukv79m wm-k"/><path class="s2v9muxhw wm-k"/><path class="mhojecb6r wm-k"/><path class="hl5q1ibmh wm-k"/><path class="r45wvxbiz wm-shine"/><path class="no54jfzzp wm-a"/><path class="b3xrvko0i wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:refrigerator"} {...others} />);
}

export default Component;
