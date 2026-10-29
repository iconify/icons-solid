import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqpphxdbm.css';
import '../../css/f/f_xq59bcm.css';
import '../../css/y/yb741g6sm.css';
import '../../css/t/tbbepn-vp.css';
import '../../css/o/owemc-jnk.css';
import '../../css/y/yuqa46b6u.css';
import '../../css/d/dlnh2cbjv.css';
import '../../css/h/hu1eg_bmo.css';
import '../../css/k/kb7a6hskh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nqpphxdbm wm-shadow"/><path class="f_xq59bcm wm-k"/><path class="wm-k yb741g6sm"/><path class="tbbepn-vp wm-k"/><path class="owemc-jnk wm-k"/><path class="wm-k yuqa46b6u"/><path class="dlnh2cbjv wm-shine"/><path class="hu1eg_bmo wm-k"/><path class="kb7a6hskh wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:avatar-ghost"} {...others} />);
}

export default Component;
