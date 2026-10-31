import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hru92mfxt.css';
import '../../css/o/oit8jiddo.css';
import '../../css/i/iqvhvkb5p.css';
import '../../css/f/f67p186iu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hru92mfxt wm-shadow"/><path class="oit8jiddo wm-shadow"/><path class="iqvhvkb5p"/><path class="f67p186iu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:receipt"} {...others} />);
}

export default Component;
