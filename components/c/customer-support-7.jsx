import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/z3l1sibtv.css';
import '../../css/q/q38n_mbqs.css';
import '../../css/f/fpx8nac0w.css';
import '../../css/w/ws67-9bef.css';
import '../../css/a/a1-wr2b3z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="z3l1sibtv"/><path class="q38n_mbqs"/><path class="fpx8nac0w"/><path class="ws67-9bef"/><path class="a1-wr2b3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:customer-support-7"} {...others} />);
}

export default Component;
