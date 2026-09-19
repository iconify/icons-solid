import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/on3ho5bwk.css';
import '../../css/v/v_63aev3a.css';
import '../../css/n/nieh-2j7u.css';
import '../../css/e/e9ssrfudc.css';
import '../../css/q/qmm4abdtb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="on3ho5bwk"/><path class="v_63aev3a"/><path class="nieh-2j7u"/><path class="e9ssrfudc"/><path class="qmm4abdtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sun-behind-rain-cloud"} {...others} />);
}

export default Component;
