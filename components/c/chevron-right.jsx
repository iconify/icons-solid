import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jwd5j7yph.css';
import '../../css/h/h-4ghvv5l.css';
import '../../css/l/l6r9xdbni.css';
import '../../css/b/baong0m8p.css';
import '../../css/e/e9deqlbtn.css';
import '../../css/x/xk3nt5bwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jwd5j7yph wm-shadow"/><path class="h-4ghvv5l"/><path class="l6r9xdbni"/><path class="baong0m8p"/><path class="e9deqlbtn wm-shine"/><path class="wm-deco xk3nt5bwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chevron-right"} {...others} />);
}

export default Component;
