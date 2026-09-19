import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/e2f5rw45c.css';
import '../../css/q/q5njcybvt.css';
import '../../css/x/xrpkjpy8m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="e2f5rw45c"/><path class="q5njcybvt"/><circle class="xrpkjpy8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:u-turn-right"} {...others} />);
}

export default Component;
