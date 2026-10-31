import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e-dkm4btg.css';
import '../../css/e/ewauubcgf.css';
import '../../css/h/hfppq3s8s.css';
import '../../css/e/e-xhqhbop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="e-dkm4btg wm-shadow"/><path class="ewauubcgf wm-shadow"/><path class="hfppq3s8s"/><path class="e-xhqhbop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:microscope"} {...others} />);
}

export default Component;
