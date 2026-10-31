import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dkmxbwbiv.css';
import '../../css/p/p78cv_bch.css';
import '../../css/w/w0lgbgbqx.css';
import '../../css/h/h6hb6mb1l.css';
import '../../css/j/jk46uzpxv.css';
import '../../css/h/hwk1m9tji.css';
import '../../css/z/zh_p24b0f.css';
import '../../css/s/spj237try.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dkmxbwbiv wm-k"/><path class="p78cv_bch wm-a"/><path class="w0lgbgbqx wm-deco"/><path class="h6hb6mb1l wm-k"/><path class="jk46uzpxv wm-a"/><path class="hwk1m9tji wm-shadow"/><path class="wm-shine zh_p24b0f"/><path class="spj237try wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:tree-pine"} {...others} />);
}

export default Component;
