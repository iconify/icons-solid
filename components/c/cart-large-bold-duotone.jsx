import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtl0lbbqr.css';
import '../../css/u/u_jrch4xm.css';
import '../../css/s/sxqy4g73d.css';
import '../../css/m/mfpwskuoa.css';
import '../../css/m/m4ndt4bdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qtl0lbbqr"/><path class="u_jrch4xm"/><path class="sxqy4g73d"/><path class="mfpwskuoa"/><path class="m4ndt4bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-bold-duotone"} {...others} />);
}

export default Component;
