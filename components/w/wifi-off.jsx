import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xtud-mbqe.css';
import '../../css/u/umd6fsbwl.css';
import '../../css/b/b2sw90bxm.css';
import '../../css/i/i534zhb3q.css';
import '../../css/y/yc0hy_fpo.css';
import '../../css/c/c4qhwqb-z.css';
import '../../css/y/yvqx1i4pf.css';
import '../../css/n/nzv3ny8zr.css';
import '../../css/y/y9qi1lbyu.css';
import '../../css/y/ye457i6qo.css';
import '../../css/n/n2wc4djhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow xtud-mbqe"/><path class="umd6fsbwl wm-k"/><path class="b2sw90bxm wm-k"/><path class="i534zhb3q wm-k"/><path class="wm-shine yc0hy_fpo"/><path class="c4qhwqb-z wm-k"/><path class="wm-k yvqx1i4pf"/><path class="nzv3ny8zr wm-k"/><path class="wm-s y9qi1lbyu"/><path class="wm-s ye457i6qo"/><path class="n2wc4djhf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:wifi-off"} {...others} />);
}

export default Component;
