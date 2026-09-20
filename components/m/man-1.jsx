import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1x_7uf1f.css';
import '../../css/z/zh6mz1jcn.css';
import '../../css/h/h4f790zpr.css';
import '../../css/z/zj03yi5ju.css';
import '../../css/v/vacbzohxb.css';
import '../../css/w/wnlqs5hzr.css';
import '../../css/r/rs4dgnhmr.css';
import '../../css/c/ccznvhyhc.css';
import '../../css/z/zaj91yhms.css';
import '../../css/e/ev5z5la2e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o1x_7uf1f"/><path class="zh6mz1jcn"/><path class="h4f790zpr"/><path class="zj03yi5ju"/><path class="vacbzohxb"/><path class="wnlqs5hzr"/><path class="rs4dgnhmr"/><path class="ccznvhyhc"/><path class="zaj91yhms"/><path class="ev5z5la2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:man-1"} {...others} />);
}

export default Component;
