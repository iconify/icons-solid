import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e7lqm9obr.css';
import '../../css/z/z37i7yg4n.css';
import '../../css/n/n724o7bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="e7lqm9obr"/><path clip-rule="evenodd" class="z37i7yg4n"/><path class="n724o7bcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cable-sharp-duotone"} {...others} />);
}

export default Component;
