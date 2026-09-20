import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r_hrkacfe.css';
import '../../css/f/fj12aacni.css';
import '../../css/n/n2hwc4qgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r_hrkacfe"/><path class="fj12aacni"/><path class="n2hwc4qgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-ribbon"} {...others} />);
}

export default Component;
