import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sxb4si85g.css';
import '../../css/c/c7vd15b_x.css';
import '../../css/s/syzf4dduc.css';
import '../../css/b/b2bxutlba.css';
import '../../css/n/npjeylbea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sxb4si85g"/><path class="c7vd15b_x wm-shine"/><path class="syzf4dduc wm-k"/><path class="b2bxutlba wm-a"/><path class="npjeylbea wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:map"} {...others} />);
}

export default Component;
