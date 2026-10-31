import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhlpg9bkc.css';
import '../../css/h/hct9igb0o.css';
import '../../css/l/ln504ccwh.css';
import '../../css/b/b_-kbob-o.css';
import '../../css/h/h5rptubpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rhlpg9bkc wm-k"/><path class="hct9igb0o wm-shine"/><path class="ln504ccwh wm-shine"/><path class="b_-kbob-o wm-shine"/><path class="h5rptubpv wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:book"} {...others} />);
}

export default Component;
