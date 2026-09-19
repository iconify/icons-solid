import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9i1vdbko.css';
import '../../css/o/oakyvybig.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="f9i1vdbko"/><path class="oakyvybig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-erased"} {...others} />);
}

export default Component;
