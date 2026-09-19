import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj5q7kbzd.css';
import '../../css/n/nabjh0sde.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rj5q7kbzd"/><path class="nabjh0sde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:eye-off-sharp"} {...others} />);
}

export default Component;
