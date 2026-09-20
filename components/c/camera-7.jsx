import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbza7tfqd.css';
import '../../css/l/lufk4pc6e.css';
import '../../css/k/kj4oe_b_l.css';
import '../../css/f/fwzlqn05q.css';
import '../../css/c/cu_w20xgi.css';
import '../../css/z/ziobf_bqx.css';
import '../../css/o/ofl-qin9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cbza7tfqd"/><path class="lufk4pc6e"/><path class="kj4oe_b_l"/><path class="fwzlqn05q"/><path class="cu_w20xgi"/><path class="ziobf_bqx"/><path class="ofl-qin9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:camera-7"} {...others} />);
}

export default Component;
