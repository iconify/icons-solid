import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/t/tixsqgbda.css';
import '../../css/m/mqw39ebup.css';
import '../../css/u/ufcpl0bkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="tixsqgbda"/><path class="mqw39ebup"/><path class="ufcpl0bkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:stopwatch"} {...others} />);
}

export default Component;
