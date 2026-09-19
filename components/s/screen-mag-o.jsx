import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3-kin2ph.css';
import '../../css/q/q6tuz1lwf.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="y3-kin2ph"/><path class="q6tuz1lwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:screen-mag-o"} {...others} />);
}

export default Component;
