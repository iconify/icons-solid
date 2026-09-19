import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6u974y3x.css';
import '../../css/a/a19ub-b_t.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="g6u974y3x"/><path class="a19ub-b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:globe-share"} {...others} />);
}

export default Component;
