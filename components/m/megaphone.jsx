import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/n-3uzs-0b.css';
import '../../css/t/t8gye75ws.css';
import '../../css/l/libqaz5pf.css';
import '../../css/o/oylomrb6e.css';
import '../../css/f/f26bn-hui.css';
import '../../css/r/r5k1vw20h.css';
import '../../css/d/dzng150ko.css';
import '../../css/j/jgrtmccot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="n-3uzs-0b"/><path class="t8gye75ws"/><path class="libqaz5pf wm-shine"/><path class="oylomrb6e wm-k"/><path class="f26bn-hui wm-a"/><path class="r5k1vw20h"/><path class="dzng150ko"/><path class="jgrtmccot wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:megaphone"} {...others} />);
}

export default Component;
