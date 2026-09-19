import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7bclh6ay.css';
import '../../css/e/e9s0ab8fq.css';
import '../../css/y/y8uolzsot.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="y7bclh6ay"/><path class="e9s0ab8fq"/><path class="y8uolzsot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:phone-route-alt-r"} {...others} />);
}

export default Component;
