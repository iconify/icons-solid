import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mn765hb_v.css';
import '../../css/a/a1j0enb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mn765hb_v"/><path class="a1j0enb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:image-play"} {...others} />);
}

export default Component;
