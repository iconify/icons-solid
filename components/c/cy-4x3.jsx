import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5vgbcb_s.css';
import '../../css/m/m3lg6r39d.css';
import '../../css/u/ulr3z_42u.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="y5vgbcb_s"/><path id="SVGG01l0bWp" class="m3lg6r39d"/><use width="100%" height="100%" href="#SVGG01l0bWp" transform="matrix(-1 0 0 1 593.7 0)"/><path class="ulr3z_42u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cy-4x3"} {...others} />);
}

export default Component;
