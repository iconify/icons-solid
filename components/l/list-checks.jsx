import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mun-f5k6r.css';
import '../../css/f/f6bq3-oon.css';
import '../../css/y/yb2eb2rfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="mun-f5k6r wm-shadow"/><path class="f6bq3-oon wm-shadow"/><path class="yb2eb2rfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:list-checks"} {...others} />);
}

export default Component;
