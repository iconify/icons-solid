import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z20jynq7u.css';
import '../../css/q/q6qo4l7px.css';
import '../../css/x/xjgox88rv.css';
import '../../css/n/n9-0_jbif.css';
import '../../css/f/fl4r37_8e.css';
import '../../css/h/h-l82dbfn.css';
import '../../css/t/tkgbr-bgj.css';
import '../../css/b/bnblrzg4w.css';
import '../../css/n/nu0l2jbvs.css';
import '../../css/c/cgacxdb8p.css';
import '../../css/m/mqu--9sjf.css';
import '../../css/e/enawut32a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow z20jynq7u"/><path class="q6qo4l7px"/><path class="xjgox88rv"/><path class="n9-0_jbif"/><path class="fl4r37_8e"/><path class="h-l82dbfn"/><path class="tkgbr-bgj"/><path class="bnblrzg4w"/><path class="nu0l2jbvs"/><path class="cgacxdb8p"/><path class="mqu--9sjf wm-shine"/><path class="enawut32a wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:chevron-up"} {...others} />);
}

export default Component;
