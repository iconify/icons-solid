import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkard0b0m.css';
import '../../css/x/xfo5eibbw.css';
import '../../css/s/sac1lebmg.css';
import '../../css/r/rgiiqkmbq.css';
import '../../css/w/wfbaofbct.css';
import '../../css/l/l_2lnybef.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="tkard0b0m"/><path class="xfo5eibbw"/><path class="sac1lebmg"/><path class="rgiiqkmbq"/><path class="wfbaofbct"/><path class="l_2lnybef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ship"} {...others} />);
}

export default Component;
