import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fn0wq6idx.css';
import '../../css/c/c6umcke_u.css';
import '../../css/a/awygp3k4i.css';
import '../../css/t/typ6whbrj.css';
import '../../css/w/wzfyoq7wc.css';
import '../../css/p/pakawy2oj.css';
import '../../css/e/ea5-kfbev.css';
import '../../css/a/ascn5pb_m.css';
import '../../css/u/ui7ruwbkq.css';
import '../../css/d/d6_z9_gxg.css';
import '../../css/e/edc_4pbtx.css';
import '../../css/x/xmlqjunmm.css';
import '../../css/l/l63pzibbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fn0wq6idx"/><path class="c6umcke_u"/><path class="awygp3k4i"/><path class="typ6whbrj"/><path class="wzfyoq7wc"/><path class="pakawy2oj"/><path class="ea5-kfbev"/><path class="ascn5pb_m"/><path class="ui7ruwbkq"/><path class="d6_z9_gxg"/><path class="edc_4pbtx"/><path class="xmlqjunmm"/><path class="l63pzibbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:car-repair-fluid-1"} {...others} />);
}

export default Component;
