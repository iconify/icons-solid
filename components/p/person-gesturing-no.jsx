import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xn9hd7buo.css';
import '../../css/s/s7vsx43cq.css';
import '../../css/o/o8_nz_3te.css';
import '../../css/f/ftnj38j1k.css';
import '../../css/o/o1ste-kao.css';
import '../../css/g/gflxfxb0i.css';
import '../../css/a/a93gbtbkv.css';
import '../../css/b/bug8e6d8p.css';
import '../../css/g/gpwfmacko.css';
import '../../css/v/vnxp_gbps.css';
import '../../css/a/ax9dclbtk.css';
import '../../css/y/yqe4gluhr.css';
import '../../css/i/imavnjbkm.css';
import '../../css/v/vu0_91c8i.css';
import '../../css/n/n2-bcwbbz.css';
import '../../css/v/vnofmfo_u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xn9hd7buo"/><path class="s7vsx43cq"/><path class="o8_nz_3te"/><path class="ftnj38j1k"/><path class="o1ste-kao"/><path class="gflxfxb0i"/><path class="a93gbtbkv"/><path class="bug8e6d8p"/><path class="gpwfmacko"/><path class="vnxp_gbps"/><path class="ax9dclbtk"/><path class="yqe4gluhr"/><path class="imavnjbkm"/><path class="vu0_91c8i"/><path class="n2-bcwbbz"/><path class="vnofmfo_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-gesturing-no"} {...others} />);
}

export default Component;
