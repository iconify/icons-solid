import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/ps76937xg.css';
import '../../css/j/jsu3n-fpc.css';
import '../../css/m/mn6mirbrg.css';
import '../../css/f/f6x9m15la.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ps76937xg wm-shadow"/><path class="jsu3n-fpc"/><path class="mn6mirbrg"/><path class="f6x9m15la"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:voicemail"} {...others} />);
}

export default Component;
