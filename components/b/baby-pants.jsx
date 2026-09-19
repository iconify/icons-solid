import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hb42i22zt.css';
import '../../css/b/bn5r6w_wn.css';
import '../../css/x/xtspv7bqw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="hb42i22zt"/><path class="bn5r6w_wn"/><path class="xtspv7bqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:baby-pants"} {...others} />);
}

export default Component;
