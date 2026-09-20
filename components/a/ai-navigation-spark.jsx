import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wea1gcc5l.css';
import '../../css/z/zvamtptcp.css';
import '../../css/i/imsvvrv4g.css';
import '../../css/r/rj5rlhb9o.css';
import '../../css/z/zy_nyobrx.css';
import '../../css/l/l5wukrb6k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wea1gcc5l"/><path class="zvamtptcp"/><path class="imsvvrv4g"/><path class="rj5rlhb9o"/><path class="zy_nyobrx"/><path class="l5wukrb6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-navigation-spark"} {...others} />);
}

export default Component;
