import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkn7r21bx.css';
import '../../css/o/oa0rywtqa.css';
import '../../css/m/m3m6fac1f.css';
import '../../css/f/f4ecojumd.css';
import '../../css/l/lyx91lkqy.css';
import '../../css/u/uaezv3n_k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nkn7r21bx"/><path class="oa0rywtqa"/><path class="m3m6fac1f"/><path class="f4ecojumd"/><path class="lyx91lkqy"/><path class="uaezv3n_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ss-1x1"} {...others} />);
}

export default Component;
