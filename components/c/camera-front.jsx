import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtk-ex65l.css';
import '../../css/w/wdqg0vxjf.css';
import '../../css/b/by4plbukf.css';
import '../../css/c/c9289cc3r.css';
import '../../css/i/i2gs_9kok.css';
import '../../css/x/xrz--bc7t.css';
import '../../css/n/nnggpw53r.css';
import '../../css/f/ffmrm8bze.css';
import '../../css/s/s8geecb-o.css';
import '../../css/n/n5ozggbyp.css';
import '../../css/b/blbw_xbif.css';
import '../../css/u/u6_vof8vh.css';
import '../../css/m/m4dq4_b7l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jtk-ex65l"/><path class="wdqg0vxjf"/><path class="by4plbukf"/><path class="c9289cc3r"/><path class="i2gs_9kok"/><path class="xrz--bc7t"/><path class="nnggpw53r"/><path class="ffmrm8bze"/><path class="s8geecb-o"/><path class="n5ozggbyp"/><path class="blbw_xbif"/><path class="u6_vof8vh"/><path class="m4dq4_b7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:camera-front"} {...others} />);
}

export default Component;
