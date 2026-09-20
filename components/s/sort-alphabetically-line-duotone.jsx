import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mm06y9blo.css';
import '../../css/v/vnxfpbb2u.css';
import '../../css/e/ez5yvcb0u.css';
import '../../css/u/u65-1ubal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mm06y9blo"/><path class="vnxfpbb2u"/><path class="ez5yvcb0u"/><path class="u65-1ubal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-alphabetically-line-duotone"} {...others} />);
}

export default Component;
