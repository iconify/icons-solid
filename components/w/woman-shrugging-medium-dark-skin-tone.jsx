import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enr159rza.css';
import '../../css/e/eztqw9biy.css';
import '../../css/y/ygbq0jubt.css';
import '../../css/o/ouu5_nsrf.css';
import '../../css/k/k0td-8bku.css';
import '../../css/r/r0pv2pucs.css';
import '../../css/r/ruewaub4d.css';
import '../../css/s/s4sui9lbl.css';
import '../../css/l/lqg0wwbfq.css';
import '../../css/z/zafc2c0gt.css';
import '../../css/n/nuw04vbko.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="enr159rza"/><g class="eztqw9biy"><path class="ygbq0jubt"/><path class="ouu5_nsrf"/><path class="k0td-8bku"/></g><path class="r0pv2pucs"/><path class="ruewaub4d"/><path class="s4sui9lbl"/><path class="lqg0wwbfq"/><path class="zafc2c0gt"/><path class="nuw04vbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-shrugging-medium-dark-skin-tone"} {...others} />);
}

export default Component;
