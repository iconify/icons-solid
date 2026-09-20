import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v2cunjb9g.css';
import '../../css/m/m6164hj6m.css';
import '../../css/n/njufilbcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v2cunjb9g"/><path class="m6164hj6m"/><path class="njufilbcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-line-duotone"} {...others} />);
}

export default Component;
