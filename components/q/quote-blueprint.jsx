import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zqi7n5vpo.css';
import '../../css/a/av5roibzc.css';
import '../../css/m/mhdr543mh.css';
import '../../css/k/kzy2krb6a.css';
import '../../css/z/ziv0n64rr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zqi7n5vpo"/><path class="av5roibzc wm-deco"/><path class="mhdr543mh wm-deco"/><path class="kzy2krb6a"/><path class="ziv0n64rr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:quote-blueprint"} {...others} />);
}

export default Component;
