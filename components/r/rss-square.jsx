import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/eoiab9bjt.css';
import '../../css/j/j-zx2bi7d.css';
import '../../css/s/sketmpmjf.css';
import '../../css/m/mwhy-sjua.css';
import '../../css/c/cajlrbcrr.css';
import '../../css/u/u7_v8mziz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="eoiab9bjt"/><path class="j-zx2bi7d"/><path class="sketmpmjf"/><path class="mwhy-sjua"/><path class="cajlrbcrr"/><path class="u7_v8mziz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:rss-square"} {...others} />);
}

export default Component;
