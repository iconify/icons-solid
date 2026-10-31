import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q70ydpb2b.css';
import '../../css/u/uo9cxsbnr.css';
import '../../css/c/c4s7lf2lr.css';
import '../../css/x/xqgk0mbbd.css';
import '../../css/g/ge4wt_bxd.css';
import '../../css/x/x0uhrnbxy.css';
import '../../css/a/arpbypjwp.css';
import '../../css/g/gg1e4lbbn.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g display="block"><path class="q70ydpb2b"/><path class="uo9cxsbnr"/><path class="c4s7lf2lr"/><path class="xqgk0mbbd"/><path class="ge4wt_bxd"/><path class="x0uhrnbxy"/><path class="arpbypjwp"/><path class="gg1e4lbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:blueberry"} {...others} />);
}

export default Component;
