import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fg3_ue5-m.css';
import '../../css/d/d_z2v9ejq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fg3_ue5-m"/><path class="d_z2v9ejq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-pointer-down-two-tone"} {...others} />);
}

export default Component;
