import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/neicvubrs.css';
import '../../css/d/dxj4ljbhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="neicvubrs"/><path class="dxj4ljbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-dashed-quarter-duotone"} {...others} />);
}

export default Component;
