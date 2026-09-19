import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/aoaoooiuu.css';
import '../../css/g/gghmux14b.css';
import '../../css/o/om0877eqx.css';
import '../../css/u/ua4x8smoj.css';
import '../../css/l/lv858cbsp.css';
import '../../css/b/b0awgk8bb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="aoaoooiuu"/><path class="gghmux14b"/><path class="om0877eqx"/><path class="ua4x8smoj"/><path class="lv858cbsp"/><path class="b0awgk8bb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:light"} {...others} />);
}

export default Component;
