import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4ilgsrrs.css';
import '../../css/y/yjyhuibss.css';
import '../../css/n/nb-termsd.css';
import '../../css/q/qawa7lb5a.css';
import '../../css/g/gus0x-btu.css';
import '../../css/j/j_gbtqbqm.css';
import '../../css/g/g9d-zmber.css';
import '../../css/a/awajy9bqh.css';
import '../../css/c/c_wrhbcta.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h4ilgsrrs"/><path class="yjyhuibss"/><ellipse class="nb-termsd"/><path class="qawa7lb5a"/><path class="gus0x-btu"/><path class="j_gbtqbqm"/><path class="g9d-zmber"/><path class="awajy9bqh"/><path class="c_wrhbcta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:speedboat"} {...others} />);
}

export default Component;
