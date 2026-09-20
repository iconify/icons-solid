import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrm_zs23m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mrm_zs23m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:travstats-dark"} {...others} />);
}

export default Component;
