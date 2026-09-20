import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/up-_7c8wk.css';
import '../../css/h/h0cmpbb_c.css';
import '../../css/j/j629hkbuc.css';
import '../../css/d/dx35inbkw.css';
import '../../css/o/oqk4vfi3a.css';
import '../../css/k/kmmmwq59d.css';
import '../../css/q/qun4ykb5k.css';
import '../../css/m/m_4pe3bfb.css';
import '../../css/z/z4dya39it.css';
import '../../css/m/mbau-nbrf.css';
import '../../css/y/yvp5nbclh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="up-_7c8wk"/><path class="h0cmpbb_c"/><path class="j629hkbuc"/><path class="dx35inbkw"/><path class="oqk4vfi3a"/><path class="kmmmwq59d"/><path class="qun4ykb5k"/><path class="m_4pe3bfb"/><path class="z4dya39it"/><path class="mbau-nbrf"/><path class="yvp5nbclh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:movies-sit-drink"} {...others} />);
}

export default Component;
