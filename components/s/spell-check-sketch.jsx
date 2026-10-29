import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iqxi9pbtv.css';
import '../../css/l/lrra40ljv.css';
import '../../css/k/ku4pnpblw.css';
import '../../css/m/mt--exbgb.css';
import '../../css/i/iln71zb0h.css';
import '../../css/o/o7p-pybex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="iqxi9pbtv wm-k"/><path class="lrra40ljv wm-a"/><path class="ku4pnpblw wm-s"/><path class="mt--exbgb wm-k"/><path class="iln71zb0h wm-a"/><path class="o7p-pybex wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spell-check-sketch"} {...others} />);
}

export default Component;
