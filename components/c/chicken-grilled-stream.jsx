import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/h95ct7gqi.css';
import '../../css/x/x2h00ac4v.css';
import '../../css/n/nqy509b_k.css';
import '../../css/c/cl6ysu8sl.css';
import '../../css/s/s-exwqb-f.css';
import '../../css/v/v_23u6bln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path clip-rule="evenodd" class="h95ct7gqi"/><path class="x2h00ac4v"/><path class="nqy509b_k"/><path class="cl6ysu8sl"/><path class="s-exwqb-f"/><path class="v_23u6bln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:chicken-grilled-stream"} {...others} />);
}

export default Component;
