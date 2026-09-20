import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0wuzdbjp.css';
import '../../css/g/gm3dddxde.css';
import '../../css/s/s5o971b_w.css';
import '../../css/c/cgw9-x2hs.css';
import '../../css/e/e9hyum6lf.css';
import '../../css/f/fmw3gqhjb.css';
import '../../css/a/ak-42r_2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z0wuzdbjp"/><path class="gm3dddxde"/><path class="s5o971b_w"/><path class="cgw9-x2hs"/><path class="e9hyum6lf"/><path class="fmw3gqhjb"/><path class="ak-42r_2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:desktop-computer-pc"} {...others} />);
}

export default Component;
