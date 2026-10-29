import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trpadn35s.css';
import '../../css/n/njg5-rbkv.css';
import '../../css/q/q99-vu55t.css';
import '../../css/a/a966o0boq.css';
import '../../css/x/xbp13mbai.css';
import '../../css/j/juasjvb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="trpadn35s wm-k"/><path class="njg5-rbkv wm-k"/><path class="q99-vu55t wm-k"/><path class="a966o0boq wm-a"/><path class="wm-a xbp13mbai"/><path class="juasjvb1u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:text-cursor"} {...others} />);
}

export default Component;
