import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzwk4_bwa.css';
import '../../css/a/a03gtg9ze.css';
import '../../css/p/pkrp80bvu.css';
import '../../css/d/d9wk5wbku.css';
import '../../css/r/rqka9zh8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mzwk4_bwa wm-k"/><path class="a03gtg9ze wm-k"/><path class="pkrp80bvu wm-k"/><path class="d9wk5wbku wm-shine"/><path class="rqka9zh8l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:info-circle"} {...others} />);
}

export default Component;
