import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/de3lhjb8d.css';
import '../../css/p/pilbvv2gr.css';
import '../../css/x/xtwy4k1dy.css';
import '../../css/x/xncyu6j6z.css';
import '../../css/q/qyk0z5byo.css';
import '../../css/t/t37s85bmy.css';
import '../../css/s/spvl1h6xq.css';
import '../../css/f/fu_je1gde.css';
import '../../css/y/y7ybznjcq.css';
import '../../css/e/e-8m9wbli.css';
import '../../css/v/vd2h5gbnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="de3lhjb8d"/><path class="pilbvv2gr"/><path class="xtwy4k1dy"/><path class="xncyu6j6z"/><path class="qyk0z5byo"/><path class="t37s85bmy"/><path class="spvl1h6xq"/><path class="fu_je1gde"/><path class="y7ybznjcq"/><path class="e-8m9wbli"/><path class="vd2h5gbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:safety-float"} {...others} />);
}

export default Component;
