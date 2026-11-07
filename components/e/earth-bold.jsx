import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icpnc-zav.css';
import '../../css/f/fkh-yubxj.css';
import '../../css/j/j61w4jzst.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="icpnc-zav"/><path class="fkh-yubxj"/><path class="j61w4jzst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:earth-bold"} {...others} />);
}

export default Component;
