import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/d7f23sbgx.css';
import '../../css/a/at8usj3hk.css';
import '../../css/a/ajt7g1bty.css';
import '../../css/j/jr37kjlyl.css';
import '../../css/i/is6t01exv.css';
import '../../css/d/ds5fribfr.css';
import '../../css/t/t5nh29bwk.css';
import '../../css/b/brhuxjbcp.css';
import '../../css/o/o6cckebsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="d7f23sbgx"/><path class="at8usj3hk"/></g><path class="ajt7g1bty"/><path class="jr37kjlyl"/><path class="is6t01exv"/><path class="ds5fribfr"/><path class="t5nh29bwk"/><path class="brhuxjbcp"/><path class="o6cckebsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-square-bold-duotone"} {...others} />);
}

export default Component;
