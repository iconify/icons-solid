import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df_1kpbuf.css';
import '../../css/m/m4an1nvxr.css';
import '../../css/s/s9ac_mqsh.css';
import '../../css/f/f1btw72vs.css';
import '../../css/s/sbe6zacnl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="df_1kpbuf"/><path class="m4an1nvxr"/><path class="s9ac_mqsh"/><path class="f1btw72vs"/><path class="sbe6zacnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bridgeatnight"} {...others} />);
}

export default Component;
