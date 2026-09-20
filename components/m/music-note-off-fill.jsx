import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qv26iob9o.css';
import '../../css/n/ndwm85bos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qv26iob9o"/><path class="ndwm85bos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:music-note-off-fill"} {...others} />);
}

export default Component;
