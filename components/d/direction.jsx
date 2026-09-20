import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/q16k9wmad.css';
import '../../css/q/qw5la0zkw.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="q16k9wmad"/><path class="qw5la0zkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:direction"} {...others} />);
}

export default Component;
