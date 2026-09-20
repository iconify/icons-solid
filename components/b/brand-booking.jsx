import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mdwq2xbwy.css';
import '../../css/g/gw8xtmbth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mdwq2xbwy"/><path class="gw8xtmbth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-booking"} {...others} />);
}

export default Component;
