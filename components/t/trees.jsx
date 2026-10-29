import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/umdf13oge.css';
import '../../css/a/apjxppbat.css';
import '../../css/v/v2zvpuojt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="umdf13oge"/><path class="apjxppbat"/><path class="v2zvpuojt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:trees"} {...others} />);
}

export default Component;
