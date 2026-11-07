import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk-xizbpd.css';
import '../../css/s/soid8318v.css';
import '../../css/f/fmowag7ap.css';
import '../../css/h/h7j21sb2c.css';
import '../../css/c/c2otsz3_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rk-xizbpd"/><path class="soid8318v"/><path class="fmowag7ap"/><path class="h7j21sb2c"/><path class="c2otsz3_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-5-bold-duotone"} {...others} />);
}

export default Component;
