import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/ho41igbkb.css';
import '../../css/l/lafvv803g.css';
import '../../css/r/r3rqh6f6s.css';
import '../../css/m/mqa9-wkjz.css';
import '../../css/u/u4bse819v.css';
import '../../css/y/y543w2xot.css';
import '../../css/v/vdxodwbtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ho41igbkb"/><path class="lafvv803g"/><path class="r3rqh6f6s wm-a"/><path class="mqa9-wkjz"/><path class="u4bse819v wm-a"/><path class="y543w2xot"/><path class="vdxodwbtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:puja-thali-duo"} {...others} />);
}

export default Component;
