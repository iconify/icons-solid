import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw9vkub9d.css';
import '../../css/l/lj-taxsld.css';
import '../../css/u/uevvxgbrb.css';
import '../../css/j/juva-6bxi.css';
import '../../css/d/djwgr5bkk.css';
import '../../css/u/ufg-w7b0t.css';
import '../../css/p/p3qqu2bkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jw9vkub9d wm-k"/><path class="lj-taxsld wm-k"/><path class="uevvxgbrb wm-k"/><path class="juva-6bxi wm-shine"/><path class="djwgr5bkk wm-k"/><path class="ufg-w7b0t wm-k"/><path class="p3qqu2bkt wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:zap-off"} {...others} />);
}

export default Component;
