import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/twfzd8uco.css';
import '../../css/t/tbiog74tt.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="twfzd8uco"/><path class="tbiog74tt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:notebook"} {...others} />);
}

export default Component;
