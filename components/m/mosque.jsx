import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pnv8w4bim.css';
import '../../css/i/ia_uw_5zb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pnv8w4bim"/><path class="ia_uw_5zb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mosque"} {...others} />);
}

export default Component;
