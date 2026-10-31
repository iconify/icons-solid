import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_u_7tbvg.css';
import '../../css/i/i71-ju5_c.css';
import '../../css/y/ytd2ngj_e.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="n_u_7tbvg"/><path class="i71-ju5_c"/><path class="ytd2ngj_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:lemon"} {...others} />);
}

export default Component;
