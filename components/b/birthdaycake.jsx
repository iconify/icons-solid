import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s67hn-6ty.css';
import '../../css/z/z327iplyx.css';
import '../../css/h/hwifyzbxh.css';
import '../../css/a/aeiqoqxpk.css';
import '../../css/n/n_nj7bbgj.css';
import '../../css/h/hdy66jber.css';
import '../../css/b/bad--37bn.css';
import '../../css/v/vffnqsysi.css';
import '../../css/f/fl20f-bqc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s67hn-6ty"/><path class="z327iplyx"/><path class="hwifyzbxh"/><path class="aeiqoqxpk"/><path class="n_nj7bbgj"/><path class="hdy66jber"/><path class="bad--37bn"/><path class="vffnqsysi"/><path class="fl20f-bqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:birthdaycake"} {...others} />);
}

export default Component;
