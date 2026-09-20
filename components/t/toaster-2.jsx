import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/keez_ob_b.css';
import '../../css/l/lmc8umbky.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="keez_ob_b"/><path class="lmc8umbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:toaster-2"} {...others} />);
}

export default Component;
