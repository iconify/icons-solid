import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yjch1vbma.css';
import '../../css/e/etloo2bzr.css';
import '../../css/n/nk9d_927f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow yjch1vbma"/><path class="etloo2bzr wm-shadow"/><path class="nk9d_927f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:fingerprint"} {...others} />);
}

export default Component;
