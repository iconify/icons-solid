import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cb06xza_b.css';
import '../../css/q/q9ak2fbnh.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="cb06xza_b"/><path class="q9ak2fbnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:log-in"} {...others} />);
}

export default Component;
