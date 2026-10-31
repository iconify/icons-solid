import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lria_5bud.css';
import '../../css/r/ru2go2bhr.css';
import '../../css/h/hnvjbpuwe.css';
import '../../css/v/v084107bf.css';
import '../../css/u/uo_i2ybma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="lria_5bud"/><path class="ru2go2bhr wm-shine"/><path class="hnvjbpuwe wm-k"/><path class="v084107bf wm-a"/><path class="uo_i2ybma wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:log-in"} {...others} />);
}

export default Component;
