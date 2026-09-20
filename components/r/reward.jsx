import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/l1knxgb9x.css';
import '../../css/t/tk5-g4bwa.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="l1knxgb9x"/><path class="tk5-g4bwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:reward"} {...others} />);
}

export default Component;
