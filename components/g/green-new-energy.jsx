import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g-847bcbd.css';
import '../../css/q/q1mq1r_ft.css';
import '../../css/u/u4hrt40ee.css';
import '../../css/h/hmkhhrbss.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="g-847bcbd"/><path class="q1mq1r_ft"/><path class="u4hrt40ee"/><path class="hmkhhrbss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:green-new-energy"} {...others} />);
}

export default Component;
