import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y_6de4b_j.css';
import '../../css/g/gcg49obfm.css';
import '../../css/q/q3zuoq4no.css';
import '../../css/b/b29kr7l6m.css';
import '../../css/b/b06n2t5kk.css';
import '../../css/h/hwsutr4jy.css';
import '../../css/m/mt4efgbri.css';
import '../../css/b/br39anbuq.css';
import '../../css/j/jnzxvvb4m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="y_6de4b_j"/><path class="gcg49obfm"/><path class="q3zuoq4no"/><path class="b29kr7l6m"/><path class="b06n2t5kk"/><path class="hwsutr4jy"/><path class="mt4efgbri"/><path class="br39anbuq"/><path class="jnzxvvb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:move-in"} {...others} />);
}

export default Component;
