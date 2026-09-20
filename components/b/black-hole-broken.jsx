import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/t/tw30_ubet.css';
import '../../css/y/yic1xvbbc.css';
import '../../css/i/iwboanb7l.css';
import '../../css/y/yyfw7cykq.css';
import '../../css/u/u1c_sm1zw.css';
import '../../css/b/bu93u-bpx.css';
import '../../css/h/hhi9k4bqd.css';
import '../../css/s/s8xjouf5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="tw30_ubet"/><path class="yic1xvbbc"/><path class="iwboanb7l"/><path class="yyfw7cykq"/><path class="u1c_sm1zw"/><path class="bu93u-bpx"/><path class="hhi9k4bqd"/><path class="s8xjouf5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:black-hole-broken"} {...others} />);
}

export default Component;
