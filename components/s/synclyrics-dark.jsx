import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk0phibge.css';
import '../../css/e/e95vgl-bz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rk0phibge"/><path class="e95vgl-bz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:synclyrics-dark"} {...others} />);
}

export default Component;
