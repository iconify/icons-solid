import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pl7qj611r.css';
import '../../css/u/us2cgebqb.css';
import '../../css/x/xym5cc-rx.css';
import '../../css/r/riz8lqbnz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="pl7qj611r"/><path class="us2cgebqb"/><rect class="xym5cc-rx"/><circle class="riz8lqbnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baseball-cap"} {...others} />);
}

export default Component;
