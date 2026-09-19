import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmft_-z0e.css';
import '../../css/i/ixzyurbja.css';
import '../../css/i/iagg6rpvc.css';
import '../../css/i/il6z6ccrj.css';
import '../../css/x/xppoqqbzn.css';
import '../../css/q/qasympbtp.css';
import '../../css/c/crg6afblg.css';
import '../../css/v/vjgu4j5qx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dmft_-z0e"/><path class="ixzyurbja"/><path class="iagg6rpvc"/><path class="il6z6ccrj"/><path class="xppoqqbzn"/><path class="qasympbtp"/><path class="crg6afblg"/><path class="vjgu4j5qx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ambulance"} {...others} />);
}

export default Component;
