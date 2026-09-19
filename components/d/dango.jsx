import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wl9s3ujfd.css';
import '../../css/u/uspty975d.css';
import '../../css/r/rsykcvbgb.css';
import '../../css/w/wtc_1_m-x.css';
import '../../css/e/e9c_buocs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wl9s3ujfd"/><path class="uspty975d"/><path class="rsykcvbgb"/><path class="wtc_1_m-x"/><path class="e9c_buocs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:dango"} {...others} />);
}

export default Component;
