import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fim8sf1ao.css';
import '../../css/k/kk8y9_b2s.css';
import '../../css/s/szb4l8b9i.css';
import '../../css/h/hc-u69n6q.css';
import '../../css/h/heeawyy4t.css';
import '../../css/x/xppl6lx5l.css';
import '../../css/q/qla5ybcqv.css';
import '../../css/z/z-f_-ehdv.css';
import '../../css/g/gky0j8bcs.css';
import '../../css/i/iosh57bcd.css';
import '../../css/b/bln1lp8bl.css';
import '../../css/j/jvrj1buld.css';
import '../../css/o/oofk9f4oh.css';
import '../../css/f/fs9m1_sdi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fim8sf1ao"/><path class="kk8y9_b2s"/><path class="szb4l8b9i"/><path class="hc-u69n6q"/><path class="heeawyy4t"/><path class="xppl6lx5l"/><path class="qla5ybcqv"/><path class="z-f_-ehdv"/><path class="gky0j8bcs"/><path class="iosh57bcd"/><path class="bln1lp8bl"/><path class="jvrj1buld"/><path class="oofk9f4oh"/><path class="fs9m1_sdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:tent"} {...others} />);
}

export default Component;
