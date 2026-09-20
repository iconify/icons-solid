import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/ef9qsdb7i.css';
import '../../css/j/j0m5s5bjl.css';
import '../../css/z/zw2zbqbht.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="ef9qsdb7i"/><path class="j0m5s5bjl"/><path class="zw2zbqbht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:microphone-stand"} {...others} />);
}

export default Component;
