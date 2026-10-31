import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hru92mfxt.css';
import '../../css/o/oit8jiddo.css';
import '../../css/a/ap-0grbig.css';
import '../../css/w/wje5iab3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hru92mfxt wm-shadow"/><path class="oit8jiddo wm-shadow"/><path class="ap-0grbig"/><path class="wje5iab3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:receipt-text"} {...others} />);
}

export default Component;
