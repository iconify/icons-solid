import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/no8jfdcat.css';
import '../../css/r/rn973_bqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="no8jfdcat"/><path class="rn973_bqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:crystal-ball"} {...others} />);
}

export default Component;
