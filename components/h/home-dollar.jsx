import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/irt6x4y7p.css';
import '../../css/y/y6_chdcab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="irt6x4y7p"/><path class="y6_chdcab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-dollar"} {...others} />);
}

export default Component;
