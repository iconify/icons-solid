import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq76f0bli.css';
import '../../css/k/kjglpe2ae.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rq76f0bli"/><path class="kjglpe2ae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:connectwise-brightgauge-dark"} {...others} />);
}

export default Component;
