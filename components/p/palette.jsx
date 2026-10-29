import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp85i0p-r.css';
import '../../css/z/zk9tgabcf.css';
import '../../css/y/yfs_5tb4j.css';
import '../../css/e/e6lc7hb3x.css';
import '../../css/c/c3ohmuprt.css';
import '../../css/h/hke5qtxhq.css';
import '../../css/y/y1vf1hqlj.css';
import '../../css/h/hr9jpqjfc.css';
import '../../css/l/ls4mx2e8b.css';
import '../../css/y/yydfrbb4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow wp85i0p-r"/><path class="wm-k zk9tgabcf"/><path class="wm-k yfs_5tb4j"/><path class="e6lc7hb3x wm-k"/><path class="c3ohmuprt wm-k"/><path class="hke5qtxhq wm-k"/><path class="wm-shine y1vf1hqlj"/><path class="hr9jpqjfc wm-a"/><path class="ls4mx2e8b wm-a"/><path class="wm-a yydfrbb4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:palette"} {...others} />);
}

export default Component;
