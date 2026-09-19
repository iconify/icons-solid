import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgut2acps.css';
import '../../css/u/us_t0abnz.css';
import '../../css/q/q3zt_bcwf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cgut2acps"/><path class="us_t0abnz"/><path class="q3zt_bcwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:strawberry"} {...others} />);
}

export default Component;
