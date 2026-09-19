import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cwmm2ac2o.css';
import '../../css/v/vrdcg36zb.css';
import '../../css/g/g5ms_hbyx.css';
import '../../css/j/j1w8yh4ps.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="cwmm2ac2o"/><path class="vrdcg36zb"/><path class="g5ms_hbyx"/><path class="j1w8yh4ps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:fuel-pump"} {...others} />);
}

export default Component;
