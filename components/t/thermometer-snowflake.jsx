import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m6qks8uby.css';
import '../../css/s/si9smc6kz.css';
import '../../css/v/vp529xjks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m6qks8uby"/><path class="si9smc6kz"/><path class="vp529xjks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:thermometer-snowflake"} {...others} />);
}

export default Component;
