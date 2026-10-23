import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dse0tvsic.css';
import '../../css/l/lp24f36sk.css';
import '../../css/m/mgqx-iblo.css';
import '../../css/t/tj9j_-bfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dse0tvsic"/><path class="lp24f36sk"/><path class="mgqx-iblo"/><path class="tj9j_-bfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:toaster"} {...others} />);
}

export default Component;
