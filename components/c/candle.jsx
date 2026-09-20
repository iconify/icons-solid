import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/agk-obbet.css';
import '../../css/r/rpirw-bwd.css';
import '../../css/l/llgl5fbte.css';
import '../../css/q/q8b0mnbiz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="agk-obbet"/><path class="rpirw-bwd"/><path class="llgl5fbte"/><path class="q8b0mnbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:candle"} {...others} />);
}

export default Component;
