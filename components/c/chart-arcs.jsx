import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ld24yvbps.css';
import '../../css/t/tk5h2pbat.css';
import '../../css/j/j-iw4xtdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ld24yvbps"/><path class="tk5h2pbat"/><path class="j-iw4xtdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-arcs"} {...others} />);
}

export default Component;
