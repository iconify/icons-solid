import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ofiors0ml.css';
import '../../css/d/dztx-q5qd.css';
import '../../css/p/pstgohcda.css';
import '../../css/r/r3n5yaczg.css';
import '../../css/j/j3_h7f7oi.css';
import '../../css/t/ty867pbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ofiors0ml"/><path class="dztx-q5qd"/><path class="pstgohcda wm-a"/><path class="r3n5yaczg"/><path class="j3_h7f7oi"/><path class="ty867pbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:turtle-duo"} {...others} />);
}

export default Component;
