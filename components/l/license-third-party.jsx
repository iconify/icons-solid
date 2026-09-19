import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wrpzi992x.css';
import '../../css/n/nfmm6t1xt.css';
import '../../css/r/r_mrxrb9o.css';
import '../../css/d/ddsx15bya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wrpzi992x"/><path class="nfmm6t1xt"/><path class="r_mrxrb9o"/><path class="ddsx15bya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:license-third-party"} {...others} />);
}

export default Component;
