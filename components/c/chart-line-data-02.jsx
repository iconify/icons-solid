import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x3_k44z0a.css';
import '../../css/s/ssww1kb2i.css';
import '../../css/o/o2r20265f.css';
import '../../css/i/iy1a8hbwf.css';
import '../../css/u/uvss_uvsg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="x3_k44z0a"/><circle class="ssww1kb2i"/><circle class="o2r20265f"/><path class="iy1a8hbwf"/><path class="uvss_uvsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-line-data-02"} {...others} />);
}

export default Component;
