import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me5ba80yv.css';
import '../../css/i/iyb1cbc4d.css';
import '../../css/f/ffscyns8g.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="me5ba80yv"><path class="iyb1cbc4d"/><path class="ffscyns8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:crop-selection"} {...others} />);
}

export default Component;
