import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f7hwlcctd.css';
import '../../css/l/lpcnlnbgj.css';
import '../../css/g/gcrwrzbef.css';
import '../../css/u/uefkvfbed.css';
import '../../css/m/m06sd407r.css';
import '../../css/k/kgz6jpbsb.css';
import '../../css/r/rl11s-bsn.css';
import '../../css/b/bbwwipbly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f7hwlcctd"/><path class="lpcnlnbgj"/><path class="gcrwrzbef"/><path class="uefkvfbed"/><path class="m06sd407r"/><path class="kgz6jpbsb"/><path class="rl11s-bsn"/><path class="bbwwipbly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-dashed-broken"} {...others} />);
}

export default Component;
