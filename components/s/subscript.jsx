import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfrz28b3w.css';
import '../../css/j/jt37c7bfu.css';
import '../../css/m/muy2e_klu.css';
import '../../css/y/y5e91642j.css';
import '../../css/g/gxc5ehbjh.css';
import '../../css/z/z79_g1b0j.css';
import '../../css/n/nh8h56bbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xfrz28b3w"/><path class="jt37c7bfu wm-k"/><path class="muy2e_klu wm-k"/><path class="wm-shine y5e91642j"/><path class="gxc5ehbjh wm-a"/><path class="wm-a z79_g1b0j"/><path class="nh8h56bbz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:subscript"} {...others} />);
}

export default Component;
