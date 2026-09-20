import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kmzftabsf.css';
import '../../css/n/ndbg64n1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kmzftabsf"/><path class="ndbg64n1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:notification-alarm-2"} {...others} />);
}

export default Component;
