import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycqrxzf6v.css';
import '../../css/k/kvn_gkbgj.css';
import '../../css/m/m3gcmyefs.css';
import '../../css/m/mzdb8rp0q.css';
import '../../css/u/ubngx6b4r.css';
import '../../css/f/f02-m8b0t.css';
import '../../css/y/y7o3ipfdk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ycqrxzf6v"/><path class="kvn_gkbgj"/><path class="m3gcmyefs"/><path class="mzdb8rp0q"/><path class="ubngx6b4r"/><path class="f02-m8b0t"/><path class="y7o3ipfdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:deer"} {...others} />);
}

export default Component;
