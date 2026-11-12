import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phg1s7mys.css';
import '../../css/g/gr0vkeb_g.css';
import '../../css/p/pd-439hvt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="phg1s7mys"/><path class="gr0vkeb_g"/><path class="pd-439hvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-locker-dark"} {...others} />);
}

export default Component;
