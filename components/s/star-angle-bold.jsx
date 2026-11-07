import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhcdb8c_v.css';
import '../../css/e/efbcexbkv.css';
import '../../css/v/v299wtbzw.css';
import '../../css/s/s8fcxyg2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qhcdb8c_v"/><path class="efbcexbkv"/><path class="v299wtbzw"/><path class="s8fcxyg2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-angle-bold"} {...others} />);
}

export default Component;
