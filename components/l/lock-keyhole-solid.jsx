import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d0026jcvs.css';
import '../../css/e/edlge-m5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="d0026jcvs"/><path class="edlge-m5i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lock-keyhole-solid"} {...others} />);
}

export default Component;
