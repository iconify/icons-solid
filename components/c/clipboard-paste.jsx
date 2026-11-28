import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g5_6a43jk.css';
import '../../css/x/x-pobqbjg.css';
import '../../css/u/u8u9_5smu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g5_6a43jk"/><path class="x-pobqbjg"/><rect class="u8u9_5smu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clipboard-paste"} {...others} />);
}

export default Component;
