import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8wglebks.css';
import '../../css/o/oyh4rg2md.css';
import '../../css/g/gt-yp80yx.css';
import '../../css/j/jogg0qbdp.css';
import '../../css/m/mp6isz_2x.css';
import '../../css/z/zvbuzfbpw.css';
import '../../css/b/bz4fsabar.css';
import '../../css/n/ne8kuwtcn.css';
import '../../css/n/nb9859jtm.css';
import '../../css/g/g9ptqnxrn.css';
import '../../css/o/ou4uqk1ur.css';
import '../../css/d/d5psre68v.css';
import '../../css/j/joaxlubzy.css';
import '../../css/m/mohkkvb_h.css';
import '../../css/p/pqof5ixdm.css';
import '../../css/x/xzt2n1bya.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t8wglebks"/><path class="oyh4rg2md"/><path class="gt-yp80yx"/><path class="jogg0qbdp"/><path class="mp6isz_2x"/><path class="zvbuzfbpw"/><path class="bz4fsabar"/><path class="ne8kuwtcn"/><path class="nb9859jtm"/><circle class="g9ptqnxrn"/><path class="ou4uqk1ur"/><path class="d5psre68v"/><path class="joaxlubzy"/><circle class="mohkkvb_h"/><circle class="pqof5ixdm"/><circle class="xzt2n1bya"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bdsm-rights"} {...others} />);
}

export default Component;
