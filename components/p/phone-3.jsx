import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xr_cwq1fx.css';
import '../../css/i/iq2010_hj.css';
import '../../css/p/pm51mix5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xr_cwq1fx"/><path class="iq2010_hj"/><path class="pm51mix5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:phone-3"} {...others} />);
}

export default Component;
