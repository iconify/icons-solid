import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3rj_4l7d.css';
import '../../css/w/w4vr9i-ip.css';
import '../../css/k/kglhfwbau.css';
import '../../css/c/cr4p1u35l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c3rj_4l7d"/><path class="w4vr9i-ip"/><path class="kglhfwbau"/><path class="cr4p1u35l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:door-exit"} {...others} />);
}

export default Component;
