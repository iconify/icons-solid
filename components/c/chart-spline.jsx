import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xlcze4bks.css';
import '../../css/b/b7uff_b0q.css';
import '../../css/k/kp3sj8oie.css';
import '../../css/u/ucbigz26e.css';
import '../../css/p/p6ov47tfz.css';
import '../../css/r/r1mzhcb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xlcze4bks"/><path class="b7uff_b0q wm-k"/><path class="kp3sj8oie wm-k"/><path class="ucbigz26e wm-a"/><path class="p6ov47tfz wm-a"/><path class="r1mzhcb0d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chart-spline"} {...others} />);
}

export default Component;
