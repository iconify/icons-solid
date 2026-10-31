import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h1v6j8bkm.css';
import '../../css/f/ffxp8p6ff.css';
import '../../css/g/ghy-sebuh.css';
import '../../css/a/aydzuvbkz.css';
import '../../css/k/kjyj4ubca.css';
import '../../css/w/wo89xnbgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="h1v6j8bkm"/><path class="ffxp8p6ff wm-shine"/><path class="ghy-sebuh wm-k"/><path class="aydzuvbkz wm-a"/><path class="kjyj4ubca wm-s"/><path class="wm-deco wo89xnbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:gavel"} {...others} />);
}

export default Component;
