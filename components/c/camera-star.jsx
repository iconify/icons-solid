import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/awndjioma.css';
import '../../css/r/r_hs7hibx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="awndjioma"/><path class="r_hs7hibx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-star"} {...others} />);
}

export default Component;
