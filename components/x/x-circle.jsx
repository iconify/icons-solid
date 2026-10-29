import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzwk4_bwa.css';
import '../../css/o/otk4ldb_j.css';
import '../../css/c/c6fmg3u9f.css';
import '../../css/d/d9wk5wbku.css';
import '../../css/p/pa6v-ou8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mzwk4_bwa wm-k"/><path class="otk4ldb_j wm-k"/><path class="c6fmg3u9f wm-k"/><path class="d9wk5wbku wm-shine"/><path class="pa6v-ou8t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:x-circle"} {...others} />);
}

export default Component;
