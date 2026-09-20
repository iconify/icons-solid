import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/o/oj9mg6sxz.css';
import '../../css/y/y-ektr4tz.css';
import '../../css/e/erwqvfa4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="oj9mg6sxz"/><path class="y-ektr4tz"/><path class="erwqvfa4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:temperature-fahrenheit"} {...others} />);
}

export default Component;
