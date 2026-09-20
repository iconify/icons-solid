import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/r5t7ieb6s.css';
import '../../css/y/yn051jbhl.css';
import '../../css/m/mkd_-xb1k.css';
import '../../css/m/m0s1rngzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="r5t7ieb6s"/><path class="yn051jbhl"/><path class="mkd_-xb1k"/><path class="m0s1rngzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pie-chart"} {...others} />);
}

export default Component;
