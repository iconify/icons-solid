import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rq3_3vvtm.css';
import '../../css/x/xzau_vbuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rq3_3vvtm"/><path class="xzau_vbuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cable-two-tone"} {...others} />);
}

export default Component;
