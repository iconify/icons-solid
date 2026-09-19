import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oe2s1dbyb.css';
import '../../css/h/hx-__9b7l.css';
import '../../css/m/moq29-b6s.css';
import '../../css/j/jvcxt3txs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oe2s1dbyb"/><path class="hx-__9b7l"/><path clip-rule="evenodd" class="moq29-b6s"/><path clip-rule="evenodd" class="jvcxt3txs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:fetus"} {...others} />);
}

export default Component;
