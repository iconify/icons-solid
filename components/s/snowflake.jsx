import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mz_dbxqls.css';
import '../../css/a/a19_pabkb.css';
import '../../css/r/rc8e7925z.css';
import '../../css/k/kyd04xbxf.css';
import '../../css/d/dao8rsk3w.css';
import '../../css/h/h_30n9m7h.css';
import '../../css/h/h9ej2vbdc.css';
import '../../css/r/r7w6m9b3l.css';
import '../../css/x/xnelp4beg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mz_dbxqls wm-shadow"/><path class="a19_pabkb wm-k"/><path class="rc8e7925z wm-k"/><path class="kyd04xbxf wm-k"/><path class="dao8rsk3w wm-k"/><path class="h_30n9m7h wm-shine"/><path class="h9ej2vbdc wm-k"/><path class="r7w6m9b3l wm-k"/><path class="wm-k xnelp4beg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:snowflake"} {...others} />);
}

export default Component;
