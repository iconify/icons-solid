import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e9z-qsaai.css';
import '../../css/i/i-jcmx2ua.css';
import '../../css/s/syfidm3bs.css';
import '../../css/g/getwqsgiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="e9z-qsaai wm-shadow"/><path class="i-jcmx2ua wm-shadow"/><path class="syfidm3bs"/><path class="getwqsgiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:at-sign"} {...others} />);
}

export default Component;
