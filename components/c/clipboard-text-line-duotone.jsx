import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vsdjuskpk.css';
import '../../css/x/x_757hbgu.css';
import '../../css/d/d5t0b286k.css';
import '../../css/m/m390b8qby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vsdjuskpk"/><path class="x_757hbgu"/><path class="d5t0b286k"/><path class="m390b8qby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-text-line-duotone"} {...others} />);
}

export default Component;
