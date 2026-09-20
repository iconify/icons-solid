import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ysf7mbcrq.css';
import '../../css/y/y0gk63t6x.css';
import '../../css/g/gz5_swrdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ysf7mbcrq"/><path class="y0gk63t6x"/><path class="gz5_swrdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:broadcast"} {...others} />);
}

export default Component;
