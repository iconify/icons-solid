import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/aa_t0xbkv.css';
import '../../css/w/wo14k095v.css';
import '../../css/n/nge5cfbll.css';
import '../../css/o/ok8irzbkw.css';
import '../../css/k/kfbj6uzww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="aa_t0xbkv wm-deco"/><path class="wm-deco wo14k095v"/><path class="nge5cfbll wm-deco"/><path class="ok8irzbkw wm-k"/><path class="kfbj6uzww wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:archive-restore-blueprint"} {...others} />);
}

export default Component;
