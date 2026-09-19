import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qdu6pkbyd.css';
import '../../css/w/w4tka1boa.css';
import '../../css/o/o_sacwb1l.css';
import '../../css/b/beb5y69pe.css';
import '../../css/s/sh2h0c08v.css';
import '../../css/w/wi8egsubw.css';
import '../../css/t/t7q08sbja.css';
import '../../css/g/gf_75_ban.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="qdu6pkbyd"/><path class="w4tka1boa"/><path class="o_sacwb1l"/><path class="beb5y69pe"/><path class="sh2h0c08v"/><path class="wi8egsubw"/><path class="t7q08sbja"/><path class="gf_75_ban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chimney"} {...others} />);
}

export default Component;
