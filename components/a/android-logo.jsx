import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/o6-c0p3sz.css';
import '../../css/s/sqej_ybkf.css';
import '../../css/b/bkohubccy.css';
import '../../css/o/o-oz_ujvl.css';
import '../../css/m/mmqj2ebcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="o6-c0p3sz"/><path class="sqej_ybkf"/><path class="bkohubccy"/><path class="o-oz_ujvl"/><path class="mmqj2ebcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:android-logo"} {...others} />);
}

export default Component;
