import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-l1pd0_w.css';
import '../../css/a/aghnw_bgv.css';
import '../../css/m/mcl_-ke3h.css';
import '../../css/a/ahtm1qbts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h-l1pd0_w"><path clip-rule="evenodd" class="aghnw_bgv"/><path class="mcl_-ke3h"/><path clip-rule="evenodd" class="ahtm1qbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:round-flask-solid"} {...others} />);
}

export default Component;
