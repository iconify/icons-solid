import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n56vi-xeo.css';
import '../../css/w/wx9k55z5l.css';
import '../../css/m/mn0v4acyx.css';
import '../../css/b/b13vusbsm.css';
import '../../css/d/d2k7rs9hm.css';
import '../../css/n/ni017tb6c.css';
import '../../css/x/xl5o3flqy.css';
import '../../css/l/ljsj5sbgp.css';
import '../../css/c/cvomevbjz.css';
import '../../css/v/v3mz45vfe.css';
import '../../css/e/ea-_rbb_g.css';
import '../../css/w/w1gczobbq.css';
import '../../css/d/d7m2teb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n56vi-xeo wm-a"/><path class="wm-a wx9k55z5l"/><path class="mn0v4acyx wm-k"/><path class="b13vusbsm wm-k"/><path class="d2k7rs9hm wm-k"/><path class="ni017tb6c wm-k"/><path class="wm-k xl5o3flqy"/><path class="ljsj5sbgp wm-k"/><path class="cvomevbjz wm-shine"/><path class="v3mz45vfe wm-k"/><path class="ea-_rbb_g wm-k"/><path class="w1gczobbq wm-k"/><path class="d7m2teb1g wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:soup"} {...others} />);
}

export default Component;
