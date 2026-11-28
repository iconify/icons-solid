import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bae6gablz.css';
import '../../css/m/m4d6n2bve.css';
import '../../css/v/vtm2u7_cv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bae6gablz"/><path class="m4d6n2bve"/><circle class="vtm2u7_cv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:map-pin-sparkles"} {...others} />);
}

export default Component;
