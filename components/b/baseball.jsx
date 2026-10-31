import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/skgb1wbjs.css';
import '../../css/g/gezngsbej.css';
import '../../css/z/zy_z_lmnz.css';
import '../../css/w/w4v_cgusb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="skgb1wbjs wm-shadow"/><path class="gezngsbej wm-shadow"/><path class="zy_z_lmnz"/><path class="w4v_cgusb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:baseball"} {...others} />);
}

export default Component;
