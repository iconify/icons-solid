import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbagabb9t.css';
import '../../css/h/hbp29jb_v.css';
import '../../css/r/rho1w1b5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vbagabb9t"/><path class="hbp29jb_v"/><path class="rho1w1b5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:window-pointer"} {...others} />);
}

export default Component;
