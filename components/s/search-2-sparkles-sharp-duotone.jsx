import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y3p5e-t4j.css';
import '../../css/m/ml1scxbze.css';
import '../../css/l/lo1lpdqfm.css';
import '../../css/s/sau7yld-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="y3p5e-t4j"/><path class="ml1scxbze"/><path class="lo1lpdqfm"/><path class="sau7yld-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-2-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
