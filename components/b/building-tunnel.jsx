import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wy4vunv-p.css';
import '../../css/z/zdda6ywtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wy4vunv-p"/><path class="zdda6ywtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:building-tunnel"} {...others} />);
}

export default Component;
