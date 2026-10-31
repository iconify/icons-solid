import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpfeuxjdz.css';
import '../../css/w/w-q9khbce.css';
import '../../css/o/o5ajpab6k.css';
import '../../css/k/kf6wa5b6m.css';
import '../../css/h/hcdcwlgkp.css';
import '../../css/p/pp-ee8ihb.css';
import '../../css/p/pl_tf7bcn.css';
import '../../css/i/iark70bzc.css';
import '../../css/v/v7lf2teql.css';
import '../../css/x/xdm7vjk0y.css';
import '../../css/r/rs6ouyb0x.css';
import '../../css/j/jva6premr.css';
import '../../css/y/yraav-9di.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="cpfeuxjdz"/><path class="w-q9khbce"/><path class="o5ajpab6k"/><path class="kf6wa5b6m"/><path class="hcdcwlgkp"/><path class="pp-ee8ihb"/><path class="pl_tf7bcn"/><path class="iark70bzc"/><path class="v7lf2teql"/><path class="xdm7vjk0y"/><path class="rs6ouyb0x"/><path class="jva6premr"/><path class="yraav-9di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:new-zealand"} {...others} />);
}

export default Component;
