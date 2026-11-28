import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a87ehcciv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a31krwbep.css';
import '../../css/w/w21ai_b8z.css';
import '../../css/u/u5zkj2_9b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a87ehcciv secondary"/><g class="dt0cm9dhy primary"><path class="a31krwbep"/><path class="w21ai_b8z"/><path class="u5zkj2_9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hand-peace-duo"} {...others} />);
}

export default Component;
