import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ob63bsb4b.css';
import '../../css/g/gyh9vjbcd.css';
import '../../css/g/gklonub8e.css';
import '../../css/v/vptscuw5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ob63bsb4b"/><path class="gyh9vjbcd"/><path class="gklonub8e"/><path class="vptscuw5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-smartwatch-warning"} {...others} />);
}

export default Component;
