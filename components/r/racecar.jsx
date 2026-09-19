import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg0beobyy.css';
import '../../css/e/e7aauvb8b.css';
import '../../css/l/lqnounb3u.css';
import '../../css/x/xzn_ulbnt.css';
import '../../css/t/ti430idev.css';
import '../../css/l/leusunret.css';
import '../../css/u/ugr4pubdr.css';
import '../../css/t/th4zaxxbj.css';
import '../../css/a/albyxv_up.css';
import '../../css/g/g2mzm4b5s.css';
import '../../css/h/hwgzc948h.css';
import '../../css/b/basbvhqiv.css';
import '../../css/p/pwh6n7bgb.css';
import '../../css/e/earbxslcf.css';
import '../../css/g/gf1mov5lg.css';
import '../../css/e/eeeu55liy.css';
import '../../css/y/yqlwaebcl.css';
import '../../css/o/ofh2g8ivy.css';
import '../../css/d/dxe-i2w-s.css';
import '../../css/j/jozep8b5u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yg0beobyy"/><path class="e7aauvb8b"/><path class="lqnounb3u"/><path class="xzn_ulbnt"/><path class="ti430idev"/><circle class="leusunret"/><path class="ugr4pubdr"/><path class="th4zaxxbj"/><path class="albyxv_up"/><path class="g2mzm4b5s"/><path class="hwgzc948h"/><path class="basbvhqiv"/><path class="pwh6n7bgb"/><path class="earbxslcf"/><path class="gf1mov5lg"/><path class="eeeu55liy"/><path class="yqlwaebcl"/><path class="ofh2g8ivy"/><path class="dxe-i2w-s"/><path class="jozep8b5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:racecar"} {...others} />);
}

export default Component;
