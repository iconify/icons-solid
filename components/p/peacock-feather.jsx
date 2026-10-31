import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p_vt1dbsg.css';
import '../../css/j/jqlxe1bqj.css';
import '../../css/b/bc-1q6zun.css';
import '../../css/m/mjzvuibua.css';
import '../../css/n/n0q8y-b7u.css';
import '../../css/x/x45co_bpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="p_vt1dbsg"/><path class="jqlxe1bqj"/><path class="bc-1q6zun wm-shine"/><path class="mjzvuibua wm-k"/><path class="n0q8y-b7u wm-a"/><path class="wm-deco x45co_bpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:peacock-feather"} {...others} />);
}

export default Component;
