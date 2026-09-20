import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qtnrgmqcu.css';
import '../../css/g/g8ko324ru.css';
import '../../css/n/nwp387s1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qtnrgmqcu"/><path class="g8ko324ru"/><path class="nwp387s1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quote-circle-outline"} {...others} />);
}

export default Component;
