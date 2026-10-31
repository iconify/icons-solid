import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pyg-o2byd.css';
import '../../css/n/n_yeefbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pyg-o2byd"/><path class="n_yeefbjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:video-sparkle-duocolor-round"} {...others} />);
}

export default Component;
