import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waa0gj62l.css';
import '../../css/b/bm_ueub-p.css';
import '../../css/b/bkp0xwruu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="waa0gj62l"/><path class="bm_ueub-p"/><path class="bkp0xwruu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:union-pay"} {...others} />);
}

export default Component;
