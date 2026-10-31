import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zc3svkblt.css';
import '../../css/q/qlt110b9c.css';
import '../../css/n/niokrmbit.css';
import '../../css/l/lhzl5obtm.css';
import '../../css/s/s2pgaqb_e.css';
import '../../css/j/jyj-yylot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zc3svkblt"/><path class="qlt110b9c"/><path class="niokrmbit"/><path class="lhzl5obtm"/><path class="s2pgaqb_e"/><path class="jyj-yylot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:badge-check"} {...others} />);
}

export default Component;
