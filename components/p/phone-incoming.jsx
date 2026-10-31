import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zhz_bnbsw.css';
import '../../css/g/g3qp-dd9o.css';
import '../../css/k/k_6n2zywf.css';
import '../../css/s/spnf93r-f.css';
import '../../css/f/fwx4i460i.css';
import '../../css/a/ajivn2i1o.css';
import '../../css/l/lyo5u0j-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zhz_bnbsw"/><path class="g3qp-dd9o"/><path class="k_6n2zywf wm-shine"/><path class="spnf93r-f wm-k"/><path class="fwx4i460i wm-s"/><path class="ajivn2i1o"/><path class="lyo5u0j-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:phone-incoming"} {...others} />);
}

export default Component;
