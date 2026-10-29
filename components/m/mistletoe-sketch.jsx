import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jfu-tsbtl.css';
import '../../css/m/mh3_kgpzk.css';
import '../../css/d/dda-ttbbb.css';
import '../../css/n/nasfv3bad.css';
import '../../css/t/tpyqchb3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jfu-tsbtl wm-k"/><path class="mh3_kgpzk wm-k"/><circle class="dda-ttbbb wm-s"/><circle class="nasfv3bad wm-s"/><circle class="tpyqchb3u wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mistletoe-sketch"} {...others} />);
}

export default Component;
