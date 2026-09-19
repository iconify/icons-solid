import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3p1ybc1b.css';
import '../../css/f/f_tp7_bag.css';
import '../../css/u/u4hptimql.css';
import '../../css/b/b2l3kn09f.css';
import '../../css/u/up60uxl-k.css';
import '../../css/x/xfbdf4b6k.css';
import '../../css/u/ukum0bb7n.css';
import '../../css/v/vrj_30buj.css';
import '../../css/w/w-9z52mov.css';
import '../../css/u/upvn38bfl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="e3p1ybc1b"><path class="f_tp7_bag"/><path class="u4hptimql"/><path class="b2l3kn09f"/><path class="up60uxl-k"/><path class="xfbdf4b6k"/><path class="ukum0bb7n"/><path class="vrj_30buj"/><path class="w-9z52mov"/><path class="upvn38bfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:softball"} {...others} />);
}

export default Component;
