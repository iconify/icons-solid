import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/faakn-yaj.css';
import '../../css/u/ubpm9s3pf.css';
import '../../css/q/q72cvjbqq.css';
import '../../css/r/raz3p0bsd.css';
import '../../css/a/a_f-ah0bg.css';
import '../../css/s/soq4z2bsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="faakn-yaj wm-k"/><path class="ubpm9s3pf wm-k"/><path class="q72cvjbqq wm-k"/><path class="raz3p0bsd wm-a"/><path class="a_f-ah0bg wm-a"/><path class="soq4z2bsc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:corner-up-left"} {...others} />);
}

export default Component;
