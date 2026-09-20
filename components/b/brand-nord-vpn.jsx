import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/li9d773zu.css';
import '../../css/u/u1ak9mw8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="li9d773zu"/><path class="u1ak9mw8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-nord-vpn"} {...others} />);
}

export default Component;
