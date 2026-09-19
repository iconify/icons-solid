import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_14-901t.css';
import '../../css/n/njp6xqbwb.css';
import '../../css/i/il6z6ccrj.css';
import '../../css/x/xppoqqbzn.css';
import '../../css/e/en-l41blm.css';
import '../../css/v/vjgu4j5qx.css';
import '../../css/p/pm7jgczuf.css';
import '../../css/y/y9ul49bme.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m_14-901t"/><path class="njp6xqbwb"/><path class="il6z6ccrj"/><path class="xppoqqbzn"/><path class="en-l41blm"/><path class="vjgu4j5qx"/><path class="pm7jgczuf"/><path class="y9ul49bme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:minibus"} {...others} />);
}

export default Component;
