import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/olpt3q61e.css';
import '../../css/g/gdp3_mbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="olpt3q61e"/><path clip-rule="evenodd" class="gdp3_mbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:check-circle"} {...others} />);
}

export default Component;
