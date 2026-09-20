import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8s1o-bte.css';
import '../../css/q/qsq0s7b5a.css';
import '../../css/t/trk254b6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e8s1o-bte"/><path class="qsq0s7b5a"/><path clip-rule="evenodd" class="trk254b6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:camera-video-flat"} {...others} />);
}

export default Component;
