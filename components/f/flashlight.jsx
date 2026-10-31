import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/f7kzt9vmi.css';
import '../../css/l/lskygweyu.css';
import '../../css/g/gbsm09qze.css';
import '../../css/e/ergmsaciw.css';
import '../../css/h/h4uzyibtm.css';
import '../../css/a/a5neubxnb.css';
import '../../css/t/tg8ilqepg.css';
import '../../css/s/ssobbxb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="f7kzt9vmi"/><path class="lskygweyu"/><path class="gbsm09qze wm-shine"/><path class="ergmsaciw wm-k"/><path class="h4uzyibtm wm-a"/><path class="a5neubxnb wm-s"/><path class="tg8ilqepg"/><path class="ssobbxb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:flashlight"} {...others} />);
}

export default Component;
