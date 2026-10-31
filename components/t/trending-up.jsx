import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xconl5blq.css';
import '../../css/n/nrfl8bb0b.css';
import '../../css/b/by5uv5obj.css';
import '../../css/y/ydldn8bjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xconl5blq"/><path class="nrfl8bb0b wm-shadow"/><path class="by5uv5obj"/><path class="ydldn8bjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:trending-up"} {...others} />);
}

export default Component;
