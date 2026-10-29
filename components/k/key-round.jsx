import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4fz13lad.css';
import '../../css/a/a59j_acmw.css';
import '../../css/a/ar7titb1j.css';
import '../../css/r/r4714lbih.css';
import '../../css/t/thvsdkbqu.css';
import '../../css/a/a8fj6rbxh.css';
import '../../css/v/viigw91fn.css';
import '../../css/v/v1u9-wbon.css';
import '../../css/j/jsb48vb6h.css';
import '../../css/m/mo7089tui.css';
import '../../css/g/grvfjo7_z.css';
import '../../css/s/syxctr90p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r4fz13lad wm-shadow"/><path class="a59j_acmw wm-shadow"/><path class="ar7titb1j"/><path class="r4714lbih"/><path class="thvsdkbqu"/><path class="a8fj6rbxh"/><path class="viigw91fn"/><path class="v1u9-wbon"/><path class="jsb48vb6h"/><path class="mo7089tui"/><path class="grvfjo7_z"/><path class="syxctr90p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:key-round"} {...others} />);
}

export default Component;
