import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ice5ohbof.css';
import '../../css/w/w0sl_bboy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ice5ohbof"/><path class="w0sl_bboy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-video-fill"} {...others} />);
}

export default Component;
