import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xr6pgbpqd.css';
import '../../css/g/g6kz9cc-f.css';
import '../../css/o/oj-txtbpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="xr6pgbpqd"/><path class="g6kz9cc-f"/><path class="oj-txtbpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cactus"} {...others} />);
}

export default Component;
