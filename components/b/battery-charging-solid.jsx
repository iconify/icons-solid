import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e9johlpux.css';
import '../../css/m/mkibynbaa.css';
import '../../css/l/lf4251k5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="e9johlpux"/><path class="mkibynbaa wm-a"/><path class="lf4251k5i wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:battery-charging-solid"} {...others} />);
}

export default Component;
