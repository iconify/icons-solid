import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bimd7y-gy.css';
import '../../css/u/u9nxoobzd.css';
import '../../css/b/b95n4q2cs.css';
import '../../css/f/fkszuobjv.css';
import '../../css/t/t9m1ntheo.css';
import '../../css/y/yl4kardsp.css';
import '../../css/o/op8v83bse.css';
import '../../css/d/dsgjiybzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bimd7y-gy wm-k"/><path class="u9nxoobzd wm-a"/><path class="b95n4q2cs wm-s"/><path class="fkszuobjv wm-shadow"/><path class="t9m1ntheo wm-k"/><path class="wm-a yl4kardsp"/><path class="op8v83bse wm-a"/><path class="dsgjiybzm wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bomb-engrave"} {...others} />);
}

export default Component;
