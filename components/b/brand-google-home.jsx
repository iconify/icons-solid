import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vy8e4qbsb.css';
import '../../css/x/xb8rg3bwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vy8e4qbsb"/><path class="xb8rg3bwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-google-home"} {...others} />);
}

export default Component;
