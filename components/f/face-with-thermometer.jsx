import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md4ntcblj.css';
import '../../css/z/zp96bdb-p.css';
import '../../css/s/s6iikjgcv.css';
import '../../css/i/ipbv82biv.css';
import '../../css/w/w72m05byz.css';
import '../../css/k/kkl-_acyd.css';
import '../../css/s/sj1gbwqji.css';
import '../../css/p/py7cubcbx.css';
import '../../css/i/iy6axgb6s.css';
import '../../css/d/dvd6fwb9u.css';
import '../../css/h/h1-lhrbyi.css';
import '../../css/h/h9a2o1loy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGT5GDMdYh" class="md4ntcblj"/></defs><path class="zp96bdb-p"/><circle class="s6iikjgcv"/><path class="ipbv82biv"/><path class="w72m05byz"/><path class="kkl-_acyd"/><path class="sj1gbwqji"/><path class="py7cubcbx"/><path class="iy6axgb6s"/><use href="#SVGT5GDMdYh" class="dvd6fwb9u"/><path class="h1-lhrbyi"/><use href="#SVGT5GDMdYh" class="h9a2o1loy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-thermometer"} {...others} />);
}

export default Component;
