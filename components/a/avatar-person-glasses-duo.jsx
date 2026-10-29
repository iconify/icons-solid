import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/q/q5lrrj6xm.css';
import '../../css/r/rgqlbhblt.css';
import '../../css/o/o-ebpv9hq.css';
import '../../css/c/cqdtdnnxy.css';
import '../../css/s/spi-7emnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="q5lrrj6xm wm-a"/><path class="rgqlbhblt wm-a"/><path class="o-ebpv9hq"/><path class="cqdtdnnxy"/><path class="spi-7emnl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-glasses-duo"} {...others} />);
}

export default Component;
