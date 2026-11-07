import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rkgpse_-a.css';
import '../../css/d/dij3yubmk.css';
import '../../css/b/bwdd5rb7e.css';
import '../../css/d/d_-sftbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rkgpse_-a"/><path class="dij3yubmk"/><path class="bwdd5rb7e"/><path class="d_-sftbvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-3-line-duotone"} {...others} />);
}

export default Component;
