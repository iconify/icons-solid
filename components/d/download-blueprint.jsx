import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zc-r6fv0d.css';
import '../../css/b/bk5_mn75t.css';
import '../../css/b/bxjv56brc.css';
import '../../css/j/jauy76b2j.css';
import '../../css/b/b5g-j_i5u.css';
import '../../css/m/myxn6pb-v.css';
import '../../css/v/vwsaqtb3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zc-r6fv0d"/><path class="bk5_mn75t wm-deco"/><path class="bxjv56brc wm-deco"/><path class="jauy76b2j wm-k"/><path class="b5g-j_i5u wm-a"/><path class="myxn6pb-v wm-k"/><path class="vwsaqtb3s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:download-blueprint"} {...others} />);
}

export default Component;
