import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfzstzcwv.css';
import '../../css/o/o5ch5cb7c.css';
import '../../css/i/iw_u_sboj.css';
import '../../css/j/j34l6kblu.css';
import '../../css/o/olcsuabqv.css';
import '../../css/i/it7__hmrh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rfzstzcwv"/><path class="o5ch5cb7c"/><path class="iw_u_sboj"/><path class="j34l6kblu"/><path class="olcsuabqv"/><path class="it7__hmrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-x-48-bold"} {...others} />);
}

export default Component;
