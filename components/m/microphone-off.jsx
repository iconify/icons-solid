import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vq5xogb7l.css';
import '../../css/h/hi10uublt.css';
import '../../css/n/nwxjy3b0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vq5xogb7l"/><path class="hi10uublt"/><path class="nwxjy3b0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:microphone-off"} {...others} />);
}

export default Component;
