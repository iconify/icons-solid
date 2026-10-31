import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cxraclb8m.css';
import '../../css/x/xd979mb8t.css';
import '../../css/h/hnkrq5b7j.css';
import '../../css/v/vndqqfw6x.css';
import '../../css/w/wzz_p9fjy.css';
import '../../css/v/vx38pgbho.css';
import '../../css/r/r6t7vswca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cxraclb8m"/><path class="xd979mb8t"/><path class="hnkrq5b7j wm-shine"/><path class="vndqqfw6x wm-k"/><path class="wm-a wzz_p9fjy"/><path class="vx38pgbho"/><path class="r6t7vswca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:mithai-box"} {...others} />);
}

export default Component;
