import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/a/ayszpebqb.css';
import '../../css/x/xzf_r3bxo.css';
import '../../css/y/y3zup_abs.css';
import '../../css/f/fdx-5nbzu.css';
import '../../css/l/ljoks2b6v.css';
import '../../css/l/ld2x07bye.css';
import '../../css/x/xpigbubqc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ayszpebqb"/><path class="xzf_r3bxo"/><path class="y3zup_abs"/><path class="fdx-5nbzu"/><path class="ljoks2b6v"/><path class="ld2x07bye"/><path class="xpigbubqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:memory"} {...others} />);
}

export default Component;
