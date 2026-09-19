import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2zmswy-h.css';
import '../../css/q/q6tuz1lwf.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="m2zmswy-h"/><path class="q6tuz1lwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:screen-mag"} {...others} />);
}

export default Component;
