import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u50gi_bex.css';
import '../../css/m/mw42pob4d.css';
import '../../css/p/pqorf1bzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u50gi_bex"/><path class="mw42pob4d"/><path class="pqorf1bzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-music-line-duotone"} {...others} />);
}

export default Component;
