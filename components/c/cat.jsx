import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfn9e2kok.css';
import '../../css/o/o74enidha.css';
import '../../css/w/w5z0x3o1k.css';
import '../../css/j/jblc29blt.css';
import '../../css/a/aw43x8uds.css';
import '../../css/w/wt4oe1b2j.css';
import '../../css/p/p7t7_pfph.css';
import '../../css/y/yv0kjwb2p.css';
import '../../css/f/f6pu5j0-u.css';
import '../../css/b/b86jexlca.css';
import '../../css/k/k70vp8b0d.css';
import '../../css/x/xg3bfvb_y.css';
import '../../css/w/wmgjy7bcu.css';
import '../../css/s/sshmgzyyl.css';
import '../../css/c/cpa1-ob8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfn9e2kok wm-shadow"/><path class="o74enidha wm-k"/><path class="w5z0x3o1k wm-k"/><path class="jblc29blt wm-k"/><path class="aw43x8uds wm-k"/><path class="wm-shine wt4oe1b2j"/><path class="p7t7_pfph wm-k"/><path class="wm-k yv0kjwb2p"/><path class="f6pu5j0-u wm-k"/><path class="b86jexlca wm-k"/><path class="k70vp8b0d wm-k"/><path class="wm-a xg3bfvb_y"/><path class="wm-a wmgjy7bcu"/><path class="sshmgzyyl wm-a"/><path class="cpa1-ob8e wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:cat"} {...others} />);
}

export default Component;
