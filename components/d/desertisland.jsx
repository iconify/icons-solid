import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao0wvwboz.css';
import '../../css/m/mxbb_7hha.css';
import '../../css/w/wtaye_uwh.css';
import '../../css/y/yzkubx7fw.css';
import '../../css/y/y3q_f438t.css';
import '../../css/p/p8-3h6b4x.css';
import '../../css/s/sytbttbnc.css';
import '../../css/x/xrmb9fkzr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ao0wvwboz"/><path class="mxbb_7hha"/><path class="wtaye_uwh"/><circle class="yzkubx7fw"/><path class="y3q_f438t"/><path class="p8-3h6b4x"/><path class="sytbttbnc"/><path class="xrmb9fkzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:desertisland"} {...others} />);
}

export default Component;
