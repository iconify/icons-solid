import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q29fajb6s.css';
import '../../css/g/gemsjuy5d.css';
import '../../css/i/igffqcb0j.css';
import '../../css/h/hkmxn_bhk.css';
import '../../css/a/aa70gzblv.css';
import '../../css/e/eqwtpj1ur.css';
import '../../css/c/c-b1fjxks.css';
import '../../css/b/b3gr8bb7f.css';
import '../../css/z/zn-vbnv0t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q29fajb6s"/><path class="gemsjuy5d"/><path class="igffqcb0j"/><path class="hkmxn_bhk"/><path class="aa70gzblv"/><path class="eqwtpj1ur"/><path class="c-b1fjxks"/><path class="b3gr8bb7f"/><path class="zn-vbnv0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-keypad"} {...others} />);
}

export default Component;
