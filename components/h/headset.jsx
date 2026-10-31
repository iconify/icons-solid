import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kv1gig-tk.css';
import '../../css/n/nkpyidcoc.css';
import '../../css/i/iatj5le9x.css';
import '../../css/t/tctw47brm.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kv1gig-tk"/><path class="nkpyidcoc wm-shine"/><path class="iatj5le9x wm-k"/><path class="tctw47brm wm-a"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:headset"} {...others} />);
}

export default Component;
