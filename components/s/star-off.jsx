import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-hnrk77m.css';
import '../../css/k/k3ww56d4q.css';
import '../../css/i/imy9lbcuk.css';
import '../../css/m/m1a6b4zkd.css';
import '../../css/q/q96hqybpp.css';
import '../../css/c/cz4ujuxaj.css';
import '../../css/o/owk2l_ilz.css';
import '../../css/p/pjqqaqb6w.css';
import '../../css/v/v-0kyqcnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow y-hnrk77m"/><path class="k3ww56d4q wm-k"/><path class="imy9lbcuk wm-k"/><path class="m1a6b4zkd wm-k"/><path class="q96hqybpp wm-k"/><path class="cz4ujuxaj wm-k"/><path class="owk2l_ilz wm-shine"/><path class="pjqqaqb6w wm-s"/><path class="v-0kyqcnl wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:star-off"} {...others} />);
}

export default Component;
