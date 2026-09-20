import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wy62lmblz.css';
import '../../css/t/tu_uqbbcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wy62lmblz"/><path class="tu_uqbbcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:audio-lines-search-duotone"} {...others} />);
}

export default Component;
