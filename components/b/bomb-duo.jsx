import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tr93hqv3k.css';
import '../../css/m/mydt5mb6c.css';
import '../../css/d/dz7rqk2qw.css';
import '../../css/d/dsgjiybzm.css';
import '../../css/t/t9m1ntheo.css';
import '../../css/y/yl4kardsp.css';
import '../../css/o/op8v83bse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tr93hqv3k"/><path class="mydt5mb6c wm-a"/><path class="dz7rqk2qw wm-s"/><path class="dsgjiybzm wm-s"/><path class="t9m1ntheo"/><path class="wm-a yl4kardsp"/><path class="op8v83bse wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bomb-duo"} {...others} />);
}

export default Component;
