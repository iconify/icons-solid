import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4_-t8bbu.css';
import '../../css/o/oxdbcw2ro.css';
import '../../css/s/s6d0cib8y.css';
import '../../css/j/jf901wb0h.css';
import '../../css/x/xjeohnb0k.css';
import '../../css/m/m01hjccey.css';
import '../../css/e/e48dbjbmp.css';
import '../../css/x/xfhaodsvu.css';
import '../../css/a/avb4yrruq.css';
import '../../css/s/s9blnrb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f4_-t8bbu wm-shadow"/><path class="oxdbcw2ro wm-shadow"/><path class="s6d0cib8y"/><path class="jf901wb0h"/><path class="xjeohnb0k"/><path class="m01hjccey"/><path class="e48dbjbmp"/><path class="wm-shine xfhaodsvu"/><path class="avb4yrruq wm-shine"/><path class="s9blnrb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:maximize-2"} {...others} />);
}

export default Component;
