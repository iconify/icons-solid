import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqymmjb7f.css';
import '../../css/g/gduga29ml.css';
import '../../css/b/b5_pynb6p.css';
import '../../css/p/p3n3fgbfp.css';
import '../../css/b/bbk_jkbpd.css';
import '../../css/o/ofxfwu-ja.css';
import '../../css/z/z-1n07bcl.css';
import '../../css/u/u_2pikq-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nqymmjb7f wm-k"/><path class="gduga29ml wm-a"/><path class="b5_pynb6p wm-deco"/><path class="p3n3fgbfp wm-k"/><path class="bbk_jkbpd wm-a"/><path class="ofxfwu-ja wm-shadow"/><path class="wm-shine z-1n07bcl"/><path class="u_2pikq-w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:paw-print"} {...others} />);
}

export default Component;
