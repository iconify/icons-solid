import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4ubfcb7a.css';
import '../../css/i/iv8w_dbym.css';
import '../../css/g/g4p9n4y6r.css';
import '../../css/z/zmdku0qmj.css';
import '../../css/n/na80dqt0p.css';
import '../../css/x/xjtu3z1ie.css';
import '../../css/r/rwhlyzzkr.css';
import '../../css/f/ftnj38j1k.css';
import '../../css/o/o1ste-kao.css';
import '../../css/g/gflxfxb0i.css';
import '../../css/w/w9_o5cb3j.css';
import '../../css/s/sxwmrwa0s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="z4ubfcb7a"/><path class="iv8w_dbym"/><path class="g4p9n4y6r"/><path class="zmdku0qmj"/><path class="na80dqt0p"/><path class="xjtu3z1ie"/><path class="rwhlyzzkr"/><path class="ftnj38j1k"/><path class="o1ste-kao"/><path class="gflxfxb0i"/><path class="w9_o5cb3j"/><path class="sxwmrwa0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-frowning-medium"} {...others} />);
}

export default Component;
