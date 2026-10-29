import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jun01tbbw.css';
import '../../css/p/pucz6fbty.css';
import '../../css/e/e8s62e7kv.css';
import '../../css/r/rt55xwbdz.css';
import '../../css/a/as41vmb9v.css';
import '../../css/v/vd4b68bqs.css';
import '../../css/f/f7fqj2cmc.css';
import '../../css/t/t9_qbl75e.css';
import '../../css/x/xzedn3bam.css';
import '../../css/v/vfhyf8bxt.css';
import '../../css/l/l89w-dvji.css';
import '../../css/d/d3_mcbluv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jun01tbbw wm-shadow"/><path class="pucz6fbty wm-k"/><path class="e8s62e7kv wm-k"/><path class="rt55xwbdz wm-k"/><path class="as41vmb9v wm-k"/><path class="vd4b68bqs wm-shine"/><path class="f7fqj2cmc wm-a"/><path class="t9_qbl75e wm-a"/><path class="wm-a xzedn3bam"/><path class="vfhyf8bxt wm-a"/><path class="l89w-dvji wm-a"/><path class="d3_mcbluv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:upload"} {...others} />);
}

export default Component;
