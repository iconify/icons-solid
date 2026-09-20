import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slidqvbjz.css';
import '../../css/x/x3bu6bb_c.css';
import '../../css/g/gbmipbb0v.css';
import '../../css/b/bpyi6r_jc.css';
import '../../css/x/xlbyll4mj.css';
import '../../css/h/h7pv13bti.css';
import '../../css/e/eka_p8bzq.css';
import '../../css/s/s9as4qb6u.css';
import '../../css/x/x10tx7y6q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="slidqvbjz"/><path class="x3bu6bb_c"/><path class="gbmipbb0v"/><path class="bpyi6r_jc"/><path class="xlbyll4mj"/><path class="h7pv13bti"/><path class="eka_p8bzq"/><path class="s9as4qb6u"/><path class="x10tx7y6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-raising-hand-medium-light-skin-tone"} {...others} />);
}

export default Component;
