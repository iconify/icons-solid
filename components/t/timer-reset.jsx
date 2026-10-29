import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ii_vizbcn.css';
import '../../css/h/h6frekbjv.css';
import '../../css/z/ziiwmxdqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ii_vizbcn"/><path class="h6frekbjv"/><path class="ziiwmxdqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:timer-reset"} {...others} />);
}

export default Component;
