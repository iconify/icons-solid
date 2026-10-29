import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fddak5olp.css';
import '../../css/v/v-mjhskyu.css';
import '../../css/w/wy434ebgs.css';
import '../../css/t/t8lgeybvu.css';
import '../../css/f/ftl56zb5g.css';
import '../../css/l/lr2iw8bbm.css';
import '../../css/b/bey3eesef.css';
import '../../css/n/nl_1v0o2l.css';
import '../../css/o/o-79rfi7s.css';
import '../../css/l/l5eq7xbnj.css';
import '../../css/m/mkc40-mnf.css';
import '../../css/m/marj7bcgr.css';
import '../../css/d/dvfvfd_6h.css';
import '../../css/c/c90qvpb3q.css';
import '../../css/q/qghsru7fe.css';
import '../../css/y/y4ysiabyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fddak5olp wm-shadow"/><path class="v-mjhskyu wm-shadow"/><path class="wm-k wy434ebgs"/><path class="t8lgeybvu wm-k"/><path class="ftl56zb5g wm-k"/><path class="lr2iw8bbm wm-k"/><path class="bey3eesef wm-shine"/><path class="nl_1v0o2l wm-shine"/><path class="o-79rfi7s wm-k"/><path class="l5eq7xbnj wm-k"/><path class="mkc40-mnf wm-k"/><path class="marj7bcgr wm-k"/><path class="dvfvfd_6h wm-s"/><path class="c90qvpb3q wm-s"/><path class="qghsru7fe wm-s"/><path class="wm-s y4ysiabyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:ring-box"} {...others} />);
}

export default Component;
