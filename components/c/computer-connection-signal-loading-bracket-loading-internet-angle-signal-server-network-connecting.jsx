import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qwbn26bem.css';
import '../../css/s/s-d6dd6vi.css';
import '../../css/w/w94ahgb-l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="qwbn26bem"/><circle class="s-d6dd6vi"/><circle class="w94ahgb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-connection-signal-loading-bracket-loading-internet-angle-signal-server-network-connecting"} {...others} />);
}

export default Component;
