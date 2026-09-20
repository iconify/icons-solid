import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/o167y_bzc.css';
import '../../css/r/r19w39wtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="o167y_bzc"/><path class="r19w39wtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:router-wifi-network"} {...others} />);
}

export default Component;
