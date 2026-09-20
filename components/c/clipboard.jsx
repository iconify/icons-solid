import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjko93pgp.css';
import '../../css/t/txkw0ib2k.css';
import '../../css/j/jku-lobeh.css';
import '../../css/z/zoz55k01m.css';
import '../../css/m/mc18f7zrc.css';
import '../../css/r/rmjk_0p_w.css';
import '../../css/z/zd2ddtbpg.css';
import '../../css/t/tlaph6h9t.css';
import '../../css/c/c_p817b0l.css';
import '../../css/i/ir1qqf7dw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zjko93pgp"/><path class="txkw0ib2k"/><path class="jku-lobeh"/><path class="zoz55k01m"/><path class="mc18f7zrc"/><path class="rmjk_0p_w"/><path class="zd2ddtbpg"/><path class="tlaph6h9t"/><path class="c_p817b0l"/><path class="ir1qqf7dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:clipboard"} {...others} />);
}

export default Component;
