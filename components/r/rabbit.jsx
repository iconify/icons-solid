import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kxawedspy.css';
import '../../css/f/fwizvkbnq.css';
import '../../css/p/pyak1x72f.css';
import '../../css/a/agbrqfb9s.css';
import '../../css/n/ndglrac0e.css';
import '../../css/a/a23xizvcu.css';
import '../../css/w/wctmj1p6r.css';
import '../../css/x/xvxohlioo.css';
import '../../css/o/oji-pf87i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kxawedspy wm-shadow"/><path class="fwizvkbnq"/><path class="pyak1x72f"/><path class="agbrqfb9s"/><path class="ndglrac0e"/><path class="a23xizvcu"/><path class="wctmj1p6r"/><path class="wm-shine xvxohlioo"/><path class="oji-pf87i wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:rabbit"} {...others} />);
}

export default Component;
