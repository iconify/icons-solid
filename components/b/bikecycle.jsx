import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/z--_c9ipe.css';
import '../../css/s/s8lbu8_7j.css';
import '../../css/t/tl7v_mbuu.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="z--_c9ipe"/><path class="s8lbu8_7j"/><path class="tl7v_mbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:bikecycle"} {...others} />);
}

export default Component;
