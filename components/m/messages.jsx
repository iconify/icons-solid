import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/k-b8wo--h.css';
import '../../css/l/l1h6ihblw.css';
import '../../css/j/jrk3qtbyt.css';
import '../../css/t/tz_h5sb2j.css';
import '../../css/i/ieotq0bpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="k-b8wo--h wm-shadow"/><path class="l1h6ihblw wm-shadow"/><path class="jrk3qtbyt"/><path class="tz_h5sb2j"/><path class="ieotq0bpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:messages"} {...others} />);
}

export default Component;
