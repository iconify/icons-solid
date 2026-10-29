import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m8n2a-b2o.css';
import '../../css/l/l01suz5-u.css';
import '../../css/i/iyjpwxb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m8n2a-b2o wm-k"/><path class="l01suz5-u wm-a"/><path class="iyjpwxb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:kalash"} {...others} />);
}

export default Component;
