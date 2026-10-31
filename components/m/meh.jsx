import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r0kh_ebqo.css';
import '../../css/k/ku_w-gbbc.css';
import '../../css/a/ad-x1bbwf.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/b/b_cv058cj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="r0kh_ebqo"/><path class="ku_w-gbbc"/><path class="ad-x1bbwf wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="b_cv058cj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:meh"} {...others} />);
}

export default Component;
