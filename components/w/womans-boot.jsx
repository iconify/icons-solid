import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk7ay4bon.css';
import '../../css/m/m3c_41exy.css';
import '../../css/h/hpfg3xqso.css';
import '../../css/k/khrkydjrf.css';
import '../../css/l/lno787b0a.css';
import '../../css/y/y_6nwz4qv.css';
import '../../css/b/bxq0lq-9b.css';
import '../../css/g/g0g8febqe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wk7ay4bon"/><path class="m3c_41exy"/><path class="hpfg3xqso"/><path class="khrkydjrf"/><path class="lno787b0a"/><path class="y_6nwz4qv"/><path class="bxq0lq-9b"/><path class="g0g8febqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:womans-boot"} {...others} />);
}

export default Component;
