import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t6kb3_4pb.css';
import '../../css/g/g6atfsbre.css';
import '../../css/i/im55_4bjj.css';
import '../../css/a/aza0107_f.css';
import '../../css/k/k40u_rbrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="t6kb3_4pb wm-shadow"/><path class="g6atfsbre wm-shadow"/><path class="im55_4bjj"/><path class="aza0107_f"/><path class="k40u_rbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heart-pulse"} {...others} />);
}

export default Component;
