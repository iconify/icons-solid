import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l-f044bhm.css';
import '../../css/x/xqu6_yb3l.css';
import '../../css/p/phzlwbbpe.css';
import '../../css/s/sau7yld-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="l-f044bhm"/><path class="xqu6_yb3l"/><path class="phzlwbbpe"/><path class="sau7yld-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
