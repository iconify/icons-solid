import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ew1t2fbjf.css';
import '../../css/i/i72j3vhdk.css';
import '../../css/v/vzk6dmbmr.css';
import '../../css/o/o48txrndz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ew1t2fbjf"/><path class="i72j3vhdk"/><path class="vzk6dmbmr"/><path class="o48txrndz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:snake"} {...others} />);
}

export default Component;
