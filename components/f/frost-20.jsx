import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tsumh_p.css';
import '../../css/r/rk7xerbiz.css';
import '../../css/c/ckcn9xpxx.css';
import '../../css/m/mu_g0gb0e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z6tsumh_p"/><path class="rk7xerbiz"/><path class="ckcn9xpxx"/><path class="mu_g0gb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frost-20"} {...others} />);
}

export default Component;
