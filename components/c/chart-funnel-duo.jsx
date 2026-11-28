import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm0ajvejj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/ppt3q08ns.css';
import '../../css/a/az6mvhbpu.css';
import '../../css/f/f221bg_-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lm0ajvejj secondary"/><g class="dt0cm9dhy primary"><path class="ppt3q08ns"/><path class="az6mvhbpu"/><path class="f221bg_-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chart-funnel-duo"} {...others} />);
}

export default Component;
