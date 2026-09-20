import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fea_d8t0e.css';
import '../../css/i/if3pd-1ww.css';
import '../../css/a/a6rqpnekf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fea_d8t0e"/><path class="if3pd-1ww"/><path class="a6rqpnekf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-octagon"} {...others} />);
}

export default Component;
