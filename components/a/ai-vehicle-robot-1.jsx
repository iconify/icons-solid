import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/kjwnaurmm.css';
import '../../css/r/r9wodiwdc.css';
import '../../css/h/hfp750b0g.css';
import '../../css/e/e5nulck3j.css';
import '../../css/i/ih2e24btx.css';
import '../../css/i/ir9w2c_5a.css';
import '../../css/o/onhxeb9br.css';
import '../../css/a/a_ceqvkje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="kjwnaurmm"/><path class="r9wodiwdc"/><path class="hfp750b0g"/><path class="e5nulck3j"/><path class="ih2e24btx"/><path class="ir9w2c_5a"/><path class="onhxeb9br"/><path class="a_ceqvkje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-vehicle-robot-1"} {...others} />);
}

export default Component;
