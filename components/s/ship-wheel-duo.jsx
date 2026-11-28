import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz-fc2ukb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fgnt7v2le.css';
import '../../css/v/v-kdl66uy.css';
import '../../css/j/jjnhdopxv.css';
import '../../css/c/cvk8-33op.css';
import '../../css/w/wtkio_j1j.css';
import '../../css/p/p8-1pbcpq.css';
import '../../css/j/jpfb2y91c.css';
import '../../css/y/ybjkgduyh.css';
import '../../css/t/tb5zc3v1t.css';
import '../../css/z/z0a4wjbvj.css';
import '../../css/b/beeqbjbbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mz-fc2ukb secondary"/><g class="dt0cm9dhy primary"><path class="fgnt7v2le"/><path class="v-kdl66uy"/><path class="jjnhdopxv"/><path class="cvk8-33op"/><path class="wtkio_j1j"/><path class="p8-1pbcpq"/><path class="jpfb2y91c"/><path class="ybjkgduyh"/><path class="tb5zc3v1t"/><path class="z0a4wjbvj"/><path class="beeqbjbbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ship-wheel-duo"} {...others} />);
}

export default Component;
