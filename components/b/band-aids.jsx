import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xfdm24xto.css';
import '../../css/o/oxh8h9afe.css';
import '../../css/s/stj-2q0ei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-45 2 8.364)" class="xfdm24xto"/><path class="oxh8h9afe"/><path class="stj-2q0ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:band-aids"} {...others} />);
}

export default Component;
