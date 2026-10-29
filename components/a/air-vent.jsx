import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n871i9plu.css';
import '../../css/f/f4dmwq0uv.css';
import '../../css/t/t7t6x3bva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n871i9plu"/><path class="f4dmwq0uv"/><path class="t7t6x3bva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:air-vent"} {...others} />);
}

export default Component;
