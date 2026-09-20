import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s6-hksbbv.css';
import '../../css/j/jkdy_qbri.css';
import '../../css/d/ddzl1cbzf.css';
import '../../css/x/xf6tmeb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s6-hksbbv"/><path class="jkdy_qbri"/><path class="ddzl1cbzf"/><path class="xf6tmeb5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:smart-home2"} {...others} />);
}

export default Component;
