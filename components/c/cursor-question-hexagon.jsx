import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7dwmwbwv.css';
import '../../css/n/ny06asbpd.css';
import '../../css/z/z_wpksjft.css';
import '../../css/z/zwe2nfbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f7dwmwbwv"/><path class="ny06asbpd"/><path class="z_wpksjft"/><path class="zwe2nfbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cursor-question-hexagon"} {...others} />);
}

export default Component;
