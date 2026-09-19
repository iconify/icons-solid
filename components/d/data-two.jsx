import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/q/qzxir3brr.css';
import '../../css/v/vf4h32bmh.css';
import '../../css/i/ib2bsphlp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><ellipse class="q97o_r-5j"/><path class="qzxir3brr"/><path class="vf4h32bmh"/><path class="ib2bsphlp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:data-two"} {...others} />);
}

export default Component;
